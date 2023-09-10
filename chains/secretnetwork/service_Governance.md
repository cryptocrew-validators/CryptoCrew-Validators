## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 268 | Secret Network v1.11 Upgrade | Mon Sep 04 2023 11:55:19 UTC | ⏳ NOT VOTED |
| 269 | Include Shillables Contracts to the list in v1.10 for Pre v1.10 Contracts | Sat Sep 09 2023 08:36:50 UTC | ⏳ NOT VOTED |
| 270 | Include Sienna Network’s contracts in the list of pre-v1.10 contracts in the v1.10 network upgrade | Sun Sep 10 2023 18:26:11 UTC | ⏳ NOT VOTED |

---

### 🗳 268: Secret Network v1.11 Upgrade
- Voting Start: Mon Sep 04 2023 11:55:19 UTC
- Voting End: Mon Sep 11 2023 11:55:19 UTC

<details>
<summary>Proposal Text</summary>
 
# Secret Network v1.11 UpgradennThis proposal recommends that the chain undergo a software upgrade to version v1.11 of the Secret Network codebase on secret-4 block **10,615,300**. The estimated time for the upgrade is **Tuesday, September 12, 2023, at ~2pm UTC**.nnSince block times can vary significantly, we advise monitoring the chain for a more precise upgrade time. ETA monitor: [mintscan.io/secret/blocks/10615300](https://dev.mintscan.io/secret/blocks/10615300).nn## Upgrade Highlightsnn- Added ibc-hooks middleware by Osmosis.n - WASM hooks: allows ICS-20 token transfers to initiate contract calls, serving various use cases.n - Example: Sending tokens to Secret and immediately wrapping them as SNIP-20 token. For example, `ATOM on Hub -> ATOM on Secret -> sATOMS on Secret` (2 transactions on 2 chains) now becomes `ATOM on Hub -> sATOM on Secret` (1 transaction).n - Example: Cross-chain swaps. Using IBC Hooks, an AMM on Secret can atomically swap tokens that originated on a different chain and are headed to Secret. The AMM can also send those tokens back to the originating chain.n - [Axelar GMP](https://docs.axelar.dev/dev/general-message-passing/overview): Using IBC Hooks, a contract on Ethereum can call a contract on Secret and get a response back.n - Ack callbacks: allow non-IBC contracts that send an `IbcMsg::Transfer` to listen for the ack/timeout of the token transfer. This allows these contracts to definitively know whether the transfer was successful or not and act accordingly (refund if failed, continue if succeeded). See usage example [here](https://github.com/scrtlabs/secret.js/blob/4293219/test/ibc-hooks-contract/src/contract.rs#L47-L91).n- Added an optional `memo` field to `IbcMsg::Transfer`, to ease to use of the IBC Hooks ack callbacks feature. See usage example [here](https://github.com/scrtlabs/secret.js/blob/4293219/test/ibc-hooks-contract/src/contract.rs#L60-L63).n- Added contract upgrade feature.n - On init, the creator can specify an admin address.n - The admin can migrate the contract to a new code ID.n - The admin can update or clear the admin address.n - The admins of contracts that were instantiated before v1.10 are hardcoded according to [proposal 262](https://github.com/scrtlabs/SecretNetwork/blob/ab1852727/docs/proposals/hardcode-admins-on-v1.10.md).n - Hardcoded admins can only be updated/cleared with a future gov proposal.n - When the new `MsgMigrateContract` is invoked, the `migrate()` function is being called on the new contract code, where the new contract can optionally perform state migrations. See usage example [here](https://github.com/scrtlabs/SecretNetwork/blob/139a0eb18/cosmwasm/contracts/v1/compute-tests/migration/contract-v2/src/contract.rs#L37-L43).n- Fixed a scenario where the enclave's light client might fail a valid node registration transaction.n- Add support for uploading contracts that were compiled with Rust v1.70+.n- Update Cosmos SDK to v0.45.16n- Update Tendermint to CometBFT v0.34.29n- Update IBC to v4.4.2n- Update IAVL to v0.19.6n- Update Packet Forward Middleware to v4.1.0n- Fix initialization of x/vesting modulen- Add `env.transaction.hash` to support SNIP-52n - SNIP-52: https://github.com/SolarRepublic/SNIPs/blob/3cc16b7/SNIP-52.md#notification-data-algorithmsn - See usage example [here](https://github.com/scrtlabs/SecretNetwork/blob/4f21d5794/cosmwasm/contracts/v1/compute-tests/test-compute-contract-v2/src/contract.rs#L1398-L1400).n- Flush the enclave's cache in a random ordernn## Upgrade InstructionsnnSee [docs.scrt.network](https://docs.scrt.network/secret-network-documentation/infrastructure/upgrade-instructions/v1.11) for upgrade instructions.
</details>

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
