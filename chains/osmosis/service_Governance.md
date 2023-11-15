## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 681 | Remove second stage of USDC incentive migration | Fri Nov 17 2023 10:35:52 UTC | ✅ YES |
| 682 | Set Osmosis-Specific costs to USDC equivalents | Sat Nov 18 2023 10:31:12 UTC | ✅ YES |

---

### 🗳 681: Remove second stage of USDC incentive migration
- Voting Start: Sun Nov 12 2023 10:35:52 UTC
- Voting End: Fri Nov 17 2023 10:35:52 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would redirect the second stage of the USDC incentive migration process to the Community pool. 
## Background 
[Proposal 648](https://www.mintscan.io/osmosis/proposals/648) called for incentives on the OSMO/USDC.axl pool to be moved to the newly IBC native OSMO/USDC pool in two stages. 
The second stage occurs with the [routine incentive proposal](https://www.mintscan.io/osmosis/proposals/678) for November 2023. 

This proposal asks that these incentives not be added to the OSMO/USDC pool but be redirected to the Community Pool. 

The reasoning for this is that the [OSMO/USDC Pool](https://app.osmosis.zone/pool/1221) currently receives 3,213 OSMO per day, or 29% of all Incentive emissions, and yet has only attached $224k Liquidity despite high incentive rates. 

The routine incentives proposal increases this to 5,700 OSMO per day, leading to a more inefficient use of Incentive spend. 

This proposal would adjust the pool incentives as if the second migration had not been added by setting the OSMO/USDC incentives to 2,850 OSMO per day and redirecting the excess to the Community pool. 

**Forum Thread**: [https://forum.osmosis.zone/t/remove-second-stage-of-usdc-incentive-migration/586](https://forum.osmosis.zone/t/remove-second-stage-of-usdc-incentive-migration/586))
</details>

---

### 🗳 682: Set Osmosis-Specific costs to USDC equivalents
- Voting Start: Mon Nov 13 2023 10:31:12 UTC
- Voting End: Sat Nov 18 2023 10:31:12 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would signal the adjustment of all parameters specifying fees for permissionless but gated tasks specific to Osmosis to be a more stable value. 

## Background 
Currently, three Osmosis-specific tasks can be performed permissionlessly by paying a fee in OSMO to the Community Pool. 

**Pool creation**, Last modified in [Proposal 669](https://www.mintscan.io/osmosis/proposals/669) to be 400 OSMO 

**Creating or adding to a gauge**, Implemented in [V11](https://www.mintscan.io/osmosis/proposals/296) at 50 OSMO and 25 OSMO, respectively. 

Both of these costs are designed to be a deterrent to spam whilst also allowing the permissionless use of these features and yielding a small revenue for the community pool. 

At the time of setting, these costs were approximately 
* Create Pool: 100 USD 
* Create Gauge: 50 USD 
* Add to Gauge: 25 USD 

However, as OSMO price varies over time, these prices at this setting have ranged from: 
* Create Pool: 90 USD - 216 USD 
* Create Gauge: 11 USD - 82 USD 
* Add to Gauge: 6 USD - 41 USD 
## Proposal 
This proposal signals that costs for Osmosis-specific tasks can be set in an alternative denom decided by governance that is part of the txfee whitelist. This would then be converted to an equivalent OSMO quantity required in order to perform the message on chain. 

This proposal signals that this denom should initially be set to USDC via Noble at implementation, and the message costs to be adjusted to: 
* Create Pool: 100 USDC 
* Create Gauge: 50 USDC 
* Add to Gauge: 25 USDC 

This maintains a more constant value cost for each message as OSMO price fluctuates. 

Non-Osmosis-specific transactions, such as Governance deposits, are not directly covered in this proposal as they are part of the Cosmos SDK, although this proposal signals that this would also be desired. 

Accepting non-OSMO assets as payment for these fees is also not directly covered in this proposal but will likely be part of a future proposal. 

**Forum Thread:** [https://forum.osmosis.zone/t/set-osmosis-specific-costs-to-usdc-equivalents/622](https://forum.osmosis.zone/t/set-osmosis-specific-costs-to-usdc-equivalents/622)
</details>
