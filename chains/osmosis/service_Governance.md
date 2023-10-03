## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 641 | Deploy 20M OSMO to the stOSMO Pool | Wed Oct 04 2023 14:51:14 UTC | 🤷‍♂️ ABSTAIN |
| 642 | 💎ATOM Airdrop ✅  | Thu Oct 05 2023 02:53:56 UTC | ABSTAIN |
| 643 | Partial refund - pools created post-v19 | Fri Oct 06 2023 00:28:37 UTC | 🤷‍♂️ ABSTAIN |
| 647 | Routine Incentive Adjustment for October 2023 | Sat Oct 07 2023 16:16:14 UTC | ⏳ NOT VOTED |
| 648 | Migration of Incentives from USDC.axl pools to USDC pools | Sun Oct 08 2023 13:40:49 UTC | ⏳ NOT VOTED |

---

### 🗳 641: Deploy 20M OSMO to the stOSMO Pool
- Voting Start: Fri Sep 29 2023 14:51:14 UTC
- Voting End: Wed Oct 04 2023 14:51:14 UTC

<details>
<summary>Proposal Text</summary>
 
# SummaryrnThis proposal aims to deploy 20M OSMO to the [stOSMO/OSMO stableswap pool 4](https://app.osmosis.zone/pool/833) (#833).rnrnDoing so would eliminate the need to spend internal OSMO incentives for stOSMO liquidity, reducing OSMO emissions. Furthermore, this would create deep stOSMO liquidity, enabling Mars to safely approve stOSMO as collateral. Membrane and Levana would also likely be able to use stOSMO as collateral.rnrnThe amount of OSMO specified was calculated using Mars' rigorous Risk Framework. This amount would enable Mars to safely add stOSMO as collateral, with decent parameters.rnrnThe OSMO would be sent to a 4/6 signature scheme DAODAO multisig controlled by trusted community members. The multisig would provide the OSMO as liquidity, and then transfer the resultant LP tokens to the Osmosis community pool.rnrnSo instead of the 20M OSMO sitting idle in the community pool, it would be sitting in the stOSMO/OSMO pool, facilitating efficient stOSMO trading and generating fee revenue for OSMO stakers. And by holding the LP tokens, Osmosis governance would have complete control of the liquidity position.rnrn## Governance votesrnThe following items describe the voting options and their significance for this proposal:rn* **YES**: You wish to deploy 20M OSMO to the stOSMO/OSMO stableswap pool, to enhance Osmosis DeFirn* **NO**: You do not wish to deploy OSMO protocol owned liquidityrn* **NO WITH VETO**: You 1) consider this proposal to be spam, 2) believe it infringes on minority interests, or 3) believe it violates the rules of engagement as currently set out by Cosmos Hub governance. If the number of NoWithVeto votes is greater than a third of total votes, the proposal is rejected and the deposits are burnedrn* **ABSTAIN**: You wish to contribute to quorum but you formally decline to vote either for or against the proposalrnSee full details and the community discussion on the forum:rnhttps://forum.osmosis.zone/t/deploy-20m-osmo-to-the-stosmo-poolrn
</details>

---

### 🗳 642: 💎ATOM Airdrop ✅ 
- Voting Start: Sat Sep 30 2023 02:53:56 UTC
- Voting End: Thu Oct 05 2023 02:53:56 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 643: Partial refund - pools created post-v19
- Voting Start: Sun Oct 01 2023 00:28:37 UTC
- Voting End: Fri Oct 06 2023 00:28:37 UTC

<details>
<summary>Proposal Text</summary>
 
Requesting 13500 OSMO to facilitate user refunds of 900 osmo for all <15> pools ncreated between the time of the increase and the start of discussion to nofficialize that change. Funds will go to Support Lab DAO wallet, nto be dispersed by multisend. Discussion and details here -- nhttps://forum.osmosis.zone/t/reimburse-900-osmo-to-any-recent-pool-creators/370
</details>

---

### 🗳 647: Routine Incentive Adjustment for October 2023
- Voting Start: Mon Oct 02 2023 16:16:14 UTC
- Voting End: Sat Oct 07 2023 16:16:14 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal adjusts the Osmosis Liquidity Incentives emitted to each pool according to the methodology in [Proposal 578](https://www.mintscan.io/osmosis/proposals/578) as well as implementing [Proposal 638](https://www.mintscan.io/osmosis/proposals/638). 

 New Incentives and Targets for the pools retaining incentives can be found on the [Chaos Labs Dashboard](https://community-staging.chaoslabs.xyz/osmosis/incentives-optimization).
</details>

---

### 🗳 648: Migration of Incentives from USDC.axl pools to USDC pools
- Voting Start: Tue Oct 03 2023 13:40:49 UTC
- Voting End: Sun Oct 08 2023 13:40:49 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal asks that the incentives program migrates from incentivizing USDC.axl pools to the equivalent IBC native USDC pairings. 
## Background 
With [Proposal 624](https://www.mintscan.io/osmosis/proposals/624), Osmosis governance has recognized IBC native USDC via Noble as the canonical version of USDC. 

This status comes with the promise that the canonical status of USDC will receive higher incentives than the non-canonical version. 

This proposal would cause the transfer of incentives from the currently incentivized USDC.axl pools to the equivalent newly created USDC supercharged pools over a period of at least two weeks, culminating in removing the USDC.axl pools from the incentives system. 

* OSMO / USDC.axl, [1133](https://app.osmosis.zone/pool/1133), 0.2%, Receiving 5,370.63 and migrating to OSMO / USDC, [1221](https://app.osmosis.zone/pool/1221), 0.2% 
* USDC.axl / USDT, [1080](https://app.osmosis.zone/pool/1080), 0.05%, Receiving 89.22 and migrating to USDT / USDC, [1220](https://app.osmosis.zone/pool/1220), 0.05% 
* USDC.axl / USDT, [1081](https://app.osmosis.zone/pool/1081), 0.01%, Receiving 89.22 and migrating to USDT / USDC [1220](https://app.osmosis.zone/pool/1220), 0.05% 

[Table](https://imgur.com/a/ZQYQ1QY) 

As there is no bonding period for Supercharged liquidity pools and the Transmuter is in place for users to easily transfer their position between these pools, the two-week period only applies to the OSMO/USDC.axl pool, which is still undergoing migration from the original bonded Classic pool. 

This proposal, therefore, directly transfers all native incentives from the USDC.axl/USDT pools to the new USDT/USDC pairing as well as directly transferring half of the current OSMO incentives from the OSMO / USDC.axl pool to the new OSMO / USDC pool. 

The remaining incentives in the OSMO / USDC.axl pool will be moved to the OSMO / USDC pool in the next routine incentives proposal, expected at the start of November. 

 **Forum Post**: [https://forum.osmosis.zone/t/migration-of-incentives-from-usdc-axl-pools-to-usdc-pools/398](https://forum.osmosis.zone/t/migration-of-incentives-from-usdc-axl-pools-to-usdc-pools/398)
</details>
