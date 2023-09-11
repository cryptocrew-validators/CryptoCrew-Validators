## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 269 | Include Shillables Contracts to the list in v1.10 for Pre v1.10 Contracts | Sat Sep 16 2023 08:36:50 UTC | ⏳ NOT VOTED |
| 270 | Include Sienna Network’s contracts in the list of pre-v1.10 contracts in the v1.10 network upgrade | Mon Sep 11 2023 18:26:11 UTC | ⏳ NOT VOTED |

---

### 🗳 269: Include Shillables Contracts to the list in v1.10 for Pre v1.10 Contracts
- Voting Start: Sat Sep 09 2023 08:36:50 UTC
- Voting End: Sat Sep 16 2023 08:36:50 UTC

<details>
<summary>Proposal Text</summary>
 
#Include Shillables contracts in the list of pre v1.10 contracts in the v1.10 upgradenn## SummarynnThis is a signaling proposal by Shillables to append their contracts to the list of pre v1.10 contracts in the v1.10 upgrade. We missed the opportunity to be included in prop #262 and are asking kindly to be appended to the list. This will allow these contracts to be upgraded to the new version without having to create a new contract and have users manually migrate their state.nnIf approved, the v1.10 upgrade, tentatively scheduled for the 12th of September, 2023, will include the proposed hardcoded admins in its code.nn## DetailsnnDue to Cosmos SKD proposal length limit, the full list of contracts is available on [GitHub](https://github.com/wolfbytes4/shill-stake/blob/main/docs/hardcode-admins-on-v1.10.md).nn## Key TakeawaysnnThis proposal will allow the listed contracts to be upgraded to the new version without having to create a new contract or manually migrating user data. This will save time and effort for developers and make it easier for users to continue using the contracts after the v1.10 upgrade.nnThe Shillables team is seeking to upgrade all of their Shill Stake contracts to allow for multiple rewards to be given without impacting the users. The Wolf Pack PackBuilder is included to be able to fix a problem with the contract where new payment methods can not be added. SHILL is included in this list in case there are any key privacy updates.nn## RisksnnThe following is copied from proposal #262.nnThe main risk of this proposal is that hardcoded admins could be used to upgrade contracts to malicious code that could leak private data or steal funds. To mitigate this risk, hardcoded admins should be carefully chosen and the chain should be monitored for suspicious `MsgMigrateContract` transactions.nnNote: Hardcoded admins can only be changed or removed by a governance proposal and a subsequent chain upgrade.nnFor more info: [https://forum.scrt.network/t/an-update-on-the-contract-upgrade-feature/7012](https://forum.scrt.network/t/an-update-on-the-contract-upgrade-feature/7012)
</details>

---

### 🗳 270: Include Sienna Network’s contracts in the list of pre-v1.10 contracts in the v1.10 network upgrade
- Voting Start: Sun Sep 10 2023 18:26:11 UTC
- Voting End: Mon Sep 11 2023 18:26:11 UTC

<details>
<summary>Proposal Text</summary>
 
Sienna Network's contracts were inadvertently left out of Proposal #262 due to a misunderstanding. Following discussions with Assaf, Sienna Network intends to swiftly submit a proposal for the inclusion of all their contracts in the v1.10 Secret Network upgrade. nn Admin: Sienna DAO: secret1dxvjtjkws47ded5ce3wj9yvx0v6yanhtf8y6ul nn List of Contracts: To view the complete list of affected contracts, please refer to the following link: https://forum.scrt.network/t/include-sienna-networks-contracts-in-the-list-of-pre-v1-10-contracts-in-the-v1-10-network-upgrade/7091
</details>
