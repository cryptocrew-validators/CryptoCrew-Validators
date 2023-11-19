## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 683 | Create Volume Splitting Gauges for Pairings | Fri Nov 24 2023 11:04:54 UTC | ⏳ NOT VOTED |
| 684 | Create Stable Agnostic Volume Splitting Gauges | Fri Nov 24 2023 11:06:55 UTC | ⏳ NOT VOTED |

---

### 🗳 683: Create Volume Splitting Gauges for Pairings
- Voting Start: Sun Nov 19 2023 11:04:54 UTC
- Voting End: Fri Nov 24 2023 11:04:54 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would create new incentive gauges for groupings of pools with the same pairings but different swap fee parameters. 
## Background
Volume Splitting Incentives gauges were introduced in [V20](https://www.mintscan.io/osmosis/proposals/658) as a mechanism to divide incentives between pools in proportion to the trades they facilitate. These gauges have been used since to divide incentives between Supercharged pools and the migration-linked Classic pools. 

Unlike normal gauges, which only have one destination pool, Volume Splitting Incentive gauges cover a group of pools. Incentives are allocated to this grouping rather than the previous method of allocating to single pool gauges. 

The proportion of incentives that go to each pool in the grouping is recalculated every epoch according to the volume that occurred in the pools over the previous day. This allows pools that are generating the most volume per unit of liquidity to increase incentives day on day without waiting for a new incentive proposal to pass. 

Volume can be expected to be higher per unit of liquidity in lower fee pools due to lower costs for traders as well as an increased number of times that profitable arbitrage opportunities occur. These gauges will encourage liquidity in high-traffic routes to move to lower-fee pools within the grouping. 

As liquidity moves to these pools, the fee per trade is lowered, making Osmosis a more attractive exchange to perform trades on. It also changes the ratio of fee collection between what Liquidity Providers receive and what the protocol receives through the Taker fee. 

**Example** 
In a default OSMO/ATOM pool with 0.2% Spread Factor and the default 0.1% Taker fee there is a total swap fee of 0.3%. The Liquidity Providers receive two-thirds of the fees accumulated by that pool, and the Protocol receives a third. 

If liquidity migrates to a 0.05% Spread Factor pool, then the total swap fee will be lowered to 0.15%, with Liquidity providers receiving a third of the fees and the protocol receiving two-thirds. 

The lower fee pool will have more volume from increased arbitrage opportunities as well as a lower overall fee, helping to attract more traders. This causes the fee generation per unit of liquidity on Osmosis to increase. 

Despite this, Liquidity Providers may receive fewer swap fees overall compared to a higher fee pool, so Osmosis Incentives will help cover this gap to encourage liquidity to move to lower fee pools that provide better returns for the protocol itself. 

If trading in a pool is limited, as may be the case with most tail assets, there may be little incentive for liquidity providers to accept the lower ratio of fees, and so the volume and incentives will remain in the higher spread factor pool. In the event of a sudden increase in volume then the lower fee pool will adjust at the next epoch to attract more liquidity and make Osmosis a more attractive trading location for the asset pairing. 

## Proposed Groupings 
[Link to Table](https://imgur.com/a/JEfupxq) 

**Forum Thread**:[https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635](https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635)
</details>

---

### 🗳 684: Create Stable Agnostic Volume Splitting Gauges
- Voting Start: Sun Nov 19 2023 11:06:55 UTC
- Voting End: Fri Nov 24 2023 11:06:55 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would create new gauges for groupings of pools that do not differentiate between which incentivized stable token is present in the pairing. 

## Background
This proposal expands on the proposal to create volume-splitting incentives for all pairings that differ only by spread factor by creating stable token agnostic gauges. 

This allows the market to decide which Stable token from those included in a gauge is preferable to establish liquidity by matching incentive share to actual usage. 

Unlike normal gauges, which only have one destination pool, Volume Splitting Incentive gauges cover a group of pools. Incentives are allocated to this grouping rather than the previous method of allocating to single pool gauges. 

The proportion of incentives that go to each pool in the grouping is recalculated every epoch according to the volume that occurred in the pools over the previous day. This allows pools that are generating the most volume per unit of liquidity to increase incentives day on day without waiting for a new incentive proposal to pass. 

A Stable agnostic volume splitting gauge allows Osmosis incentives to adjust towards the pools using the most popular Stable token and away from those with less adoption. This will ensure that incentives go toward the most popular stable token for use without the protocol forcing dominance of any one of those included in the grouping. 

## Proposed Groupings
 [Link to Table](https://imgur.com/a/flqVKo2)

**Forum Thread**:[https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635](https://forum.osmosis.zone/t/create-and-incentivise-volume-splitting-incentive-gauges/635)
</details>
