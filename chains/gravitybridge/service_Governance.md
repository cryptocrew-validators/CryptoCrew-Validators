## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 221 | Add MEME Metadata to Gravity Bridge | Wed Jan 10 2024 10:52:51 UTC | ✅ YES |
| 222 | Add Neutaro Metadata to Gravity Bridge | Fri Jan 12 2024 13:41:19 UTC | ⏳ NOT VOTED |

---

### 🗳 221: Add MEME Metadata to Gravity Bridge
- Voting Start: Fri Jan 05 2024 10:52:51 UTC
- Voting End: Wed Jan 10 2024 10:52:51 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal connects the MEME token from MEME Network to the Gravity Bridge. If accepted, it would establish metadata for the IBC denom ibc/0EB6D5E44D1587D12E222C1155181884098202F56263795259C53536D07C2E65. This metadata would then be usable to deploy an ERC20 representation on Ethereum for the MEME token. Voters should verify that the ibc hash is on channel-149, that this channel matches the forwarding proposal submitted at the same time, and that the denom trace is for the correct token. This can be done using gravity query ibc-transfer denom-trace ibc/0EB6D5E44D1587D12E222C1155181884098202F56263795259C53536D07C2E65. nn For more about MEME Network see https://commonwealth.im/gravity-bridge/discussion/13611-meme-network-proposal-for-gravity-bridge and https://memenetwork.io
</details>

---

### 🗳 222: Add Neutaro Metadata to Gravity Bridge
- Voting Start: Sun Jan 07 2024 13:41:19 UTC
- Voting End: Fri Jan 12 2024 13:41:19 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal is to add the Neutaro metadata to Gravity Bridge as it is necessary for the ERC20 representation. Base denom is uneutaro and the path is transfer/channel-148.
</details>
