## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 47 | Switch to Supercharged pools for stATOM | Sat Nov 11 2023 14:12:03 UTC | ⏳ NOT VOTED |

---

### 🗳 47: Switch to Supercharged pools for stATOM
- Voting Start: Wed Nov 08 2023 14:12:03 UTC
- Voting End: Sat Nov 11 2023 14:12:03 UTC

<details>
<summary>Proposal Text</summary>
 
# Switch to Supercharged pools for stATOMn## SummarynOne of the features which proposal 44 introduced was the replacement of the GAMM module with the new PoolManager module in the Interchain Account messages with regard to opening, repaying or liquidating lease positions. This primarily allowed the Nolus Protocol to take advantage of the new Supercharged pools on Osmosis which are based on the concentrated liquidity model pioneered by Uniswap v3. This provides for more efficient trading to happen as liquidity is not spread across the whole price curve but rather in smaller distinct ranges. 
 nThis proposal aims to migrate the ID of the stATOM/ATOM pool to its new concentrated liquidity counterpart. Below the current breakdown in terms of liquidity of the old vs the new pool as well as a price impact improvement given a large swap: 

n* Standard Pool #803 ATOM/stATOM (14M USD) -> Supercharged Pool #1136 stATOM/ATOM (2.8M USD) results in ~300% better price impact for a 70k USD worth of swap with the efficiency getting better the larger the size 
nnBy voting YES on this proposal, you agree to make these adjustments to the Oracle swap tree and allow the protocol to utilize the paths above to facilitate the lease-relevant transactions.
</details>
