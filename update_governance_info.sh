#!/bin/bash

# Function to fetch proposals with pagination
fetch_proposals() {
    local endpoint="$1"
    local next_key="$2"
    local url="$endpoint/cosmos/gov/v1beta1/proposals"

    # If next_key is provided, append it to the URL
    if [ -n "$next_key" ]; then
        url="$url?pagination.key=$next_key"
    fi

    local response=$(curl -s "$url")
    local proposals=$(echo "$response" | jq -c '.proposals[]')

    # Print the proposals to stdout
    echo "$proposals"

    # Check for pagination.next_key in the response
    local new_next_key=$(echo "$response" | jq -r '.pagination.next_key')

    # If next_key exists, recursively fetch the next page
    if [ "$new_next_key" != "null" ]; then
        fetch_proposals "$endpoint" "$new_next_key"
    fi
}

# Loop through each chain in chains.json
jq -c '.chains[]' chains.json | while read chain; do
    # Extract necessary details from the chain object
    CHAIN_NAME=$(echo $chain | jq -r '.name')
    OPERATOR_ACCOUNT=$(echo $chain | jq -r '.operator_account')
    CHAIN_ID=$(echo $chain | jq -r '.chain_id')

    if [ "$CHAIN_NAME" == "radix" ] || [ "$CHAIN_NAME" == "nomic" ]; then
        echo "Skipping chain: $CHAIN_NAME"
        continue
    fi

    echo "Processing chain: $CHAIN_NAME"

    REST_ENDPOINT="https://rest.cosmos.directory:443/$CHAIN_NAME"

    # Fetch all proposals using pagination
    echo "Fetching all proposals for $CHAIN_NAME..."
    ALL_PROPOSALS=$(fetch_proposals "$REST_ENDPOINT")
  
    # Filter active proposals
    ACTIVE_PROPOSALS=$(echo "$ALL_PROPOSALS" | jq -c 'select(.status == "PROPOSAL_STATUS_VOTING_PERIOD")')
    ACTIVE_PROPOSALS_COUNT=$(echo "$ALL_PROPOSALS" | jq -c 'select(.status == "PROPOSAL_STATUS_VOTING_PERIOD")' | wc -l)
    echo "active proposals: $ACTIVE_PROPOSALS_COUNT"

    # Create MD file
    OUTPUT_FILE="${CHAIN_NAME}_service_Governance.md"
    rm $OUTPUT_FILE || true
    echo "## Active Proposals \`$CHAIN_ID\`" >> $OUTPUT_FILE
    echo "" >> $OUTPUT_FILE

    # Add table headers
    {
        echo "| PROPOSAL_ID | PROPOSAL_TITLE | VOTING_START_TIME | VOTING_END_TIME | VOTE |"
        echo "|-------------|----------------|-------------------|-----------------|------|"
    } >> $OUTPUT_FILE

    if [ -n "$ACTIVE_PROPOSALS" ];  then

      echo "$ACTIVE_PROPOSALS" | while read proposal; do
          PROPOSAL_ID=$(echo $proposal | jq -r '.proposal_id')
          if [ -z $PROPOSAL_ID ]; then
              continue
          fi
          PROPOSAL_TITLE=$(echo $proposal | jq -r '.content.title')
          VOTING_START_TIME=$(echo $proposal | jq -r '.voting_start_time')
          VOTING_END_TIME=$(echo $proposal | jq -r '.voting_end_time')
          PROPOSAL_TEXT=$(echo $proposal | jq -r '.content.description')

          echo "processing proposal $PROPOSAL_ID"

          # Fetch vote details for the operator
          echo "Fetching vote details for operator..."
          VOTE=$(curl -s "$REST_ENDPOINT/cosmos/gov/v1beta1/proposals/$PROPOSAL_ID/votes/$OPERATOR_ACCOUNT" | jq -r '.vote.option')

          # resolve vote
          VOTE_OPTION="unknown"
          if [ -z "$VOTE" ] || [[ "$VOTE" == *"null"* ]]; then
            VOTE_OPTION="⏳ not yet voted"
          else
            if [[ "$VOTE" == "VOTE_OPTION_YES" ]]; then
              VOTE_OPTION="✅ YES"
            elif [[ "$VOTE" == "VOTE_OPTION_NO" ]]; then
              VOTE_OPTION="❌ NO"
            elif [[ "$VOTE" == "VOTE_OPTION_ABSTAIN" ]]; then
              VOTE_OPTION="🤷‍♂️ ABSTAIN"
            else
              if [[ "$VOTE" == *"VOTE_OPTION"* ]]; then
                VOTE_OPTION=$(echo "VOTE_OPTION_ABSTAIN" | awk -F'_' '{print $3}')
              fi
            fi
          fi

        # Add table row for the proposal
        echo "| $PROPOSAL_ID | $PROPOSAL_TITLE | $(date -d "$VOTING_START_TIME" +"%a %b %d %Y %T UTC") | $(date -d "$VOTING_END_TIME" +"%a %b %d %Y %T UTC") | $VOTE_OPTION |" >> $OUTPUT_FILE
      done

      echo "" >> $OUTPUT_FILE
      echo "---" >> $OUTPUT_FILE
      echo "" >> $OUTPUT_FILE

      echo "$ACTIVE_PROPOSALS" | while read proposal; do
          PROPOSAL_ID=$(echo $proposal | jq -r '.proposal_id')
          if [ -z $PROPOSAL_ID ]; then
              continue
          fi
          PROPOSAL_TITLE=$(echo $proposal | jq -r '.content.title')
          VOTING_START_TIME=$(echo $proposal | jq -r '.voting_start_time')
          VOTING_END_TIME=$(echo $proposal | jq -r '.voting_end_time')
          PROPOSAL_TEXT=$(echo $proposal | jq -r '.content.description')

          # Add detailed proposal info below the table
          {
              echo "### 🗳 $PROPOSAL_ID: $PROPOSAL_TITLE"
              echo "- Voting Start: $(date -d "$VOTING_START_TIME" +"%a %b %d %Y %T UTC")"
              echo "- Voting End: $(date -d "$VOTING_END_TIME" +"%a %b %d %Y %T UTC")"
              echo ""
              echo "<details>"
              echo "<summary>Proposal Text</summary>"
              echo " "
              echo "$PROPOSAL_TEXT"
              echo "</details>"
              echo ""
              echo "---"
              echo ""
              # delete break line for last proposal
          } >> $OUTPUT_FILE

          echo "Saved details to $OUTPUT_FILE"
      done

      # remove last 3 lines
      sed -i '$d' $OUTPUT_FILE
      sed -i '$d' $OUTPUT_FILE
      sed -i '$d' $OUTPUT_FILE
    else
      # put some info that there are currently no active proposals
      echo " " >> $OUTPUT_FILE
      echo "No current active proposals found for $CHAIN_NAME" >> $OUTPUT_FILE
    fi
done

# move files to respective chain folders
for file in *_service_Governance.md; do
    CHAINNAME="${file%_service_Governance.md}"

    mv "$file" "$CHAINNAME/service_Governance.md"
done