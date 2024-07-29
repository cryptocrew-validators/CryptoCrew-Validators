## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 232 | Setup Althea L1 IBC Auto-Forwarding | Sat Aug 03 2024 17:57:03 UTC | ⏳ NOT VOTED |
| 233 | Add Althea L1 Metadata to Gravity Bridge | Sat Aug 03 2024 17:55:52 UTC | ⏳ NOT VOTED |

---

### 🗳 232: Setup Althea L1 IBC Auto-Forwarding
- Voting Start: Mon Jul 29 2024 17:57:03 UTC
- Voting End: Sat Aug 03 2024 17:57:03 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal, if accepted, would establish the bech32 address prefix 'althea' as an IBC Auto-Forwarding prefix for SendToCosmos transactions.
 Any SendToCosmos transactions whose CosmosReceiver field begins with 'althea' would automatically be forwarded to Althea L1 over IBC channel channel-168.
 Failed IBC transactions will result in tokens transferred to the equivalent address on the Gravity Bridge chain, requiring the user to import the same seed phrase on Gravity Bridge to rescue funds
 When evaluating this proposal the community should be confident that channel-168 is the official channel leading to Althea L1, and that 'althea' is the correct prefix for Althea L1 account addresses.
 For more about Althea L1 see https://althea.net and https://x.com/AltheaNetwork
</details>

---

### 🗳 233: Add Althea L1 Metadata to Gravity Bridge
- Voting Start: Mon Jul 29 2024 17:55:52 UTC
- Voting End: Sat Aug 03 2024 17:55:52 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal connects the Althea token from Althea L1 to the Gravity Bridge. If accepted, it would establish metadata for the IBC denom ibc/5B7B34C07642FAEAC81C04C488D5D622D7900600A9B37426EB0FA0B4D30AA9CE. This metadata would then be usable to deploy an ERC20 representation on Ethereum for the Althea token. Voters should verify that the ibc hash is on channel-168, that this channel matches the forwarding proposal submitted at the same time, and that the denom trace is for the correct token. This can be done using `gravity query ibc-transfer denom-trace ibc/5B7B34C07642FAEAC81C04C488D5D622D7900600A9B37426EB0FA0B4D30AA9CE`. For more about Althea L1 see https://althea.net and https://x.com/AltheaNetwork
</details>
