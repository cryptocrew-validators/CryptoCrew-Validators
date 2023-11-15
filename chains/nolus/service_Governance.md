## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 49 | Switch to Supercharged pools for WETH | Sat Nov 18 2023 10:08:36 UTC | ⏳ NOT VOTED |
| 50 | Add Supercharged pools for TIA and STARS | Sat Nov 18 2023 11:16:26 UTC | ⏳ NOT VOTED |

---

### 🗳 49: Switch to Supercharged pools for WETH
- Voting Start: Wed Nov 15 2023 10:08:36 UTC
- Voting End: Sat Nov 18 2023 10:08:36 UTC

<details>
<summary>Proposal Text</summary>
 
# Switch to Supercharged pools for WETHn## SummarynOne of the features which proposal 44 introduced was the replacement of the GAMM module with the new PoolManager module in the Interchain Account messages with regard to opening, repaying or liquidating lease positions. This primarily allowed the Nolus Protocol to take advantage of the new Supercharged pools on Osmosis which are based on the concentrated liquidity model pioneered by Uniswap v3. This provides for more efficient trading to happen as liquidity is not spread across the whole price curve but rather in smaller distinct ranges. 
 nThis proposal aims to migrate the ID of the WETH/OSMO pool to its new concentrated liquidity counterpart. Below the current breakdown in terms of liquidity of the old vs the new pool as well as a price impact improvement given a large swap: 

n* Standard Pool #704 WETH/OSMO (3M USD) -> Supercharged Pool #1134 OSMO/WETH (2M USD) results in ~400% better price impact for a 16k USD worth of swap 
nnBy voting YES on this proposal, you agree to make these adjustments to the Oracle swap tree and allow the protocol to utilize the paths above to facilitate the lease-relevant transactions.
</details>

---

### 🗳 50: Add Supercharged pools for TIA and STARS
- Voting Start: Wed Nov 15 2023 11:16:26 UTC
- Voting End: Sat Nov 18 2023 11:16:26 UTC

<details>
<summary>Proposal Text</summary>
 
# Add Supercharged pools for TIA and STARSn## SummarynOne of the features which proposal 44 introduced was the replacement of the GAMM module with the new PoolManager module in the Interchain Account messages with regard to opening, repaying or liquidating lease positions. This primarily allowed the Nolus Protocol to take advantage of the new Supercharged pools on Osmosis which are based on the concentrated liquidity model pioneered by Uniswap v3. This provides for more efficient trading to happen as liquidity is not spread across the whole price curve but rather in smaller distinct ranges. 
 nThis proposal aims to migrate the ID of the STARS/OSMO pool to its new concentrated liquidity counterpart and introduce TIA to the swap tree. Below the current breakdown in terms of liquidity of the old vs the new pool of STARS as well as a price impact improvement given a large swap: 

n* Standard Pool #604 STARS/OSMO (690k USD) -> Supercharged Pool #1096 STARS/OSMO (500k USD) results in ~2.5x better price impact for a 6k USD worth of swap 

nnThis proposal also introduces a new asset to the Oracle swap tree, namely TIA. TIA is the native token of the Celestia network. Celestia is a modular consensus and data network. Unlike other monolithic networks where the consensus and execution layer are both part of a single architecture, Celestia separates these two components. This approach means that it handles data availability and consensus, but leaves state execution (like smart contracts) to be processed on separate layers or networks. Block production and block verification are separated. Developers can effortlessly define their own customized virtual execution enviornments while directly benefiting from the security of Celestia's consensus. The native asset TIA has several use cases such as being used as means for payment by rollups to publish data to Celestia's blobspace, providing economic security to the Celestia's proof-of-stake network and potentially being used as a gas token for a rollup if developers of that rollup choose to do so. Details about TIA on Osmosis mainnet: 

n* Supercharged Pool #1248 TIA/OSMO (200k USD) 
nnBy voting YES on this proposal, you agree to make these adjustments to the Oracle swap tree and allow the protocol to utilize the paths above to facilitate the lease-relevant transactions.
</details>
