## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 688 | Signaling Proposal: Verify TORI Token as a Verified Asset on Osmosis | Sat Dec 02 2023 10:50:06 UTC | ✅ YES |
| 689 | Transfer Incentives to Created Volume Splitting Gauges | Sat Dec 02 2023 16:08:56 UTC | ⏳ NOT VOTED |
| 690 | Modification of TIA incentive allocation | Sun Dec 03 2023 13:42:12 UTC | ⏳ NOT VOTED |

---

### 🗳 688: Signaling Proposal: Verify TORI Token as a Verified Asset on Osmosis
- Voting Start: Mon Nov 27 2023 10:50:06 UTC
- Voting End: Sat Dec 02 2023 10:50:06 UTC

<details>
<summary>Proposal Text</summary>
 
Teritori, a Cosmos SDK Layer 1 blockchain and a superdApp, has its utility token, TORI, which is essential for governance and accessing diverse features of the superdApp.
The TORI token was launched on October 3, 2022, and has been traded on Osmosis for many months (Osmosis Pool 816).

This proposal aims to verify the TORI token as a verified asset on Osmosis.

More details can be found on the forum discussion: https://forum.osmosis.zone/t/signaling-proposal-to-verify-tori-token-as-a-verified-asset-on-osmosis/644
</details>

---

### 🗳 689: Transfer Incentives to Created Volume Splitting Gauges
- Voting Start: Mon Nov 27 2023 16:08:56 UTC
- Voting End: Sat Dec 02 2023 16:08:56 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would move Osmosis incentives from the currently incentivized gauges to those created in the previous gauge creation proposals. 

[Gauge mapping](https://docs.google.com/spreadsheets/d/1WSpG0hhZzIUj-76ZEhOHqBYj3bkfwXglnaha-RJZgWs/edit?usp=sharing) 

**Forum Post**:[https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635](https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635)
</details>

---

### 🗳 690: Modification of TIA incentive allocation
- Voting Start: Tue Nov 28 2023 13:42:12 UTC
- Voting End: Sun Dec 03 2023 13:42:12 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal requests that the previous incentive spends on TIA be modified to remove the minimum incentive spend restriction as well as expand the spend to further pools. 
## Background 
Proposals [665](https://www.mintscan.io/osmosis/proposals/665) and [673](https://www.mintscan.io/osmosis/proposals/673) included minimum and maximum spends of the allocated OSMO for TIA incentives. 

This was set to a minimum of 3000 OSMO/day for the TIA/USDC pool and 1500 OSMO/day for the TIA/OSMO pools, with a maximum of 6000 OSMO/day. 

These minimums were intended to ensure that sufficient liquidity arrived during the bootstrapping phase of the TIA market by providing a fee subsidy for potentially high impermanent loss during the price discovery phase. 

We are currently on Week 5 of incentives, around halfway through the incentivization period, and spending has been at the minimum level for each week beyond the initial week. Based on the 3x TIA Staking APR targets for the USDC pool and 1.5x TIA Staking APR for the OSMO pool, the minimum settings have caused overpayments of around three times the target with minimal impact on attracting further liquidity. 

The original intention of setting minimums, maximums, and an algorithmic incentive allocation was to allow incentives to taper compared to swap fees as liquidity increased. However, this seems to have been set too high as TIA has consistently been one of the most traded assets on Osmosis, even with the lower liquidity levels seen so far. 
## Proposal 
This proposal would modify the incentives allowed to be spent by the [multisig](https://osmosis.daodao.zone/dao/osmo1g6dsaslf2gyzf6yexgmefsf4c4kc7ddu0jh3jtpg4a7x9xxy6z9qttelz7/treasury) as follows: 

* Removal of Minimum incentive spend criteria for the existing spends. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Estimated to reduce spending by ~2000 OSMO/day. 

* Addition of allowable spends of 1x TIA Staking APR on LST pairings of TIA (e.g. milkTIA/TIA). 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Minimum spend of 250 OSMO/day for the first week with no ongoing minimum. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Maximum of 1000 OSMO/day. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Estimated to increase spending by ~250-500 OSMO/day. 

* Addition of allowable spends of 3x TIA Staking APR on other Stable pairings (e.g. TIA/USDT or differing spreads of TIA/USDC). 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Establish a more sustainable swap fee market of 0.2% spread factor post-incentives 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Establish alternative stablecoin pairings for an large market on Osmosis 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Minimum spend of 500 OSMO/day for the first week with no ongoing minimum. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Sharing the 6000 OSMO/day maximum cap with existing stable pools. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Estimated to increase spending by ~1500 OSMO/day. 

This should result in a minimal net change to the level of incentives spent on TIA whilst diversifying the TIA liquidity landscape on Osmosis. 

**Forum Thread:** [https://forum.osmosis.zone/t/modification-of-tia-incentive-allocation/707](https://forum.osmosis.zone/t/modification-of-tia-incentive-allocation/707)
</details>
