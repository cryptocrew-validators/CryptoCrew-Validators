## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 275 | Secret Network v1.12 Upgrade | Tue Oct 17 2023 06:10:51 UTC | ⏳ NOT VOTED |
| 276 | Cosmos x Celestia Airdrop ✅ | Wed Oct 18 2023 19:40:15 UTC | ⏳ NOT VOTED |

---

### 🗳 275: Secret Network v1.12 Upgrade
- Voting Start: Tue Oct 10 2023 06:10:51 UTC
- Voting End: Tue Oct 17 2023 06:10:51 UTC

<details>
<summary>Proposal Text</summary>
 
# Secret Network v1.12 UpgradennThis proposal recommends that the chain undergo a software upgrade to version v1.12 of the Secret Network codebase on secret-4 block 11,136,666. The estimated time for the upgrade is **Tuesday, October 17, 2023, at ~2pm UTC**.nnSince block times can vary significantly, we advise monitoring the chain for a more precise upgrade time. ETA monitor: [mintscan.io](https://dev.mintscan.io/secret/blocks/11136666) or [ping.pub](https://ping.pub/secret/block/11136666).nn## Upgrade Highlightsnn- Fix the hardcoded admins featuren- Add hardcoded admins according to proposals [269](https://dev.mintscan.io/secret/proposals/269) (Shillables) & [270](https://dev.mintscan.io/secret/proposals/270) (Sienna).n- Fix PFM to stop dropping packets of IBC contracts.n - This has always been a bug in PFM. It was introduced in v1.9 and was missed because of a bug in our CI system.n - Fixed the bug in PFM and updated the dependency.n - For more info see https://github.com/cosmos/ibc-apps/pull/105.n- Add `admin` to `WasmMsg::Instantiate` in cosmwasm-std (Thanks [@luca992](https://github.com/luca992)!).n - This allows contracts to specify an admin address when instantiating other contracts.n - See usage example [here](https://github.com/scrtlabs/SecretNetwork/blob/eedfac881/cosmwasm/contracts/v1/compute-tests/test-compute-contract/src/contract.rs#L245-L259).n- Update IBC to v4.5.0nn## Upgrade InstructionsnnSee [docs.scrt.network](https://docs.scrt.network/secret-network-documentation/infrastructure/upgrade-instructions/v1.12) for upgrade instructions.
</details>

---

### 🗳 276: Cosmos x Celestia Airdrop ✅
- Voting Start: Wed Oct 11 2023 19:40:15 UTC
- Voting End: Wed Oct 18 2023 19:40:15 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>
