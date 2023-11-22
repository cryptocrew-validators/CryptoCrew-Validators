## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 214 | Add ARCH token to Gravity Bridge | Sun Nov 26 2023 18:57:51 UTC | ⏳ NOT VOTED |
| 215 | Setup Archway IBC Auto-Forwarding | Mon Nov 27 2023 10:35:50 UTC | ⏳ NOT VOTED |

---

### 🗳 214: Add ARCH token to Gravity Bridge
- Voting Start: Tue Nov 21 2023 18:57:51 UTC
- Voting End: Sun Nov 26 2023 18:57:51 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal connects the ARCH token from Archway to the Gravity Bridge. If accepted, it would establish metadata for the IBC denom ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B. This metadata would then be usable to deploy an ERC20 representation on Ethereum for the ARCH token. Voters should verify that the ibc hash is on channel-145, that this channel matches the forwarding proposal submitted at the same time, and that the denom trace is for the correct token. This can be done using `gravity query ibc-transfer denom-trace ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B`
</details>

---

### 🗳 215: Setup Archway IBC Auto-Forwarding
- Voting Start: Wed Nov 22 2023 10:35:50 UTC
- Voting End: Mon Nov 27 2023 10:35:50 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal, if accepted, would establish the bech32 address prefix 'archway' as the IBC Auto-Forwarding prefix for `SendToCosmos` transactions. Any `SendToCosmos` transactions whose `CosmosReceiver` field begins with 'archway1' will be automatically forwarded to Archway Network over the IBC channel channel-145. Failed IBC transactions will result in tokens transferred to the equivalent address in the Gravity Bridge chain, requiring user intervention with the same Cosmos private key. When evaluating this proposal, the community should be confident that channel-145 is the official channel leading to the Archway Network, and that is the correct prefix for the Archway account addresses.
</details>
