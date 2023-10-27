## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 45 | Switch to Supercharged pools for OSMO, AKT and WBTC | Mon Oct 30 2023 15:25:02 UTC | ⏳ NOT VOTED |

---

### 🗳 45: Switch to Supercharged pools for OSMO, AKT and WBTC
- Voting Start: Fri Oct 27 2023 15:25:02 UTC
- Voting End: Mon Oct 30 2023 15:25:02 UTC

<details>
<summary>Proposal Text</summary>
 
# Switch to Supercharged pools for OSMO, AKT and WBTCn## SummarynOne of the features which proposal 44 introduced was the replacement of the GAMM module with the new PoolManager module in the Interchain Account messages with regard to opening, repaying or liquidating lease positions. This primarily allowed the Nolus Protocol to take advantage of the new Supercharged pools on Osmosis which are based on the concentrated liquidity model pioneered by Uniswap v3. This provides for more efficient trading to happen as liquidity is not spread across the whole price curve but rather in smaller distinct ranges. 
 nThis proposal aims to migrate the pool IDs of the AKT/OSMO, axlUSDC/OSMO and WBTC/OSMO to their new concentrated liquidity counterparts. Below the current breakdown in terms of liquidity of the old vs the new pools as well as a price impact improvement given a swap worth of 1/100 of the deposited liquidity in the larger pool: 

n* Standard Pool #3 AKT/OSMO (530k USD) -> Supercharged Pool #1093 AKT/OSMO (950k USD) results in ~200% better price impact for a 5k USD worth of swap 
n* Standard Pool #678 axlUSDC/OSMO (3.37M USD) -> Supercharged Pool #1133 OSMO/axlUSDC (1.8M USD) results in ~6% better price impact for a 30k USD worth of swap 
n* Standard Pool #712 WBTC/OSMO (2M USD) -> Supercharged Pool #1090 OSMO/WBTC (1.6M USD) results in ~25% better price impact for a 20k USD worth of swap 
nnBy voting YES on this proposal, you agree to make these adjustments to the Oracle swap tree and allow the protocol to utilize the paths above to facilitate the lease-relevant transactions.
</details>
