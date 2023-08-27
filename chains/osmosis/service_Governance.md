## Active Proposals `osmosis-1`

| PROPOSAL_ID | PROPOSAL_TITLE | VOTING_START_TIME | VOTING_END_TIME | VOTE |
|-------------|----------------|-------------------|-----------------|------|
| 589 | Create Initial Wormhole Supercharged Pools | Fri Aug 25 2023 13:03:30 UTC | Wed Aug 30 2023 13:03:30 UTC | ⏳ not yet voted |
| 592 | Add ATOM/USDT pairings to the Osmosis Incentives Program | Fri Aug 25 2023 16:54:55 UTC | Wed Aug 30 2023 16:54:55 UTC | ⏳ not yet voted |
| 593 | Community Spend: Match Kava Rise Rewards for three months | Fri Aug 25 2023 16:56:35 UTC | Wed Aug 30 2023 16:56:35 UTC | ⏳ not yet voted |
| 598 | 💎 ATOM Airdrop ✅ | Sat Aug 26 2023 23:56:55 UTC | Thu Aug 31 2023 23:56:55 UTC | ⏳ not yet voted |

---

### 🗳 589: Create Initial Wormhole Supercharged Pools
- Voting Start: Fri Aug 25 2023 13:03:30 UTC
- Voting End: Wed Aug 30 2023 13:03:30 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would create nine new Supercharged Liquidity pools: 

* SOL/USDT 0.2% Spread 
* SOL/USDT 0.05% Spread 
* APT/USDT 0.2% Spread 
* APT/USDT 0.05% Spread 
* SUI/USDT 0.2% Spread 
* SUI/USDT 0.05% Spread 
* BONK/USDT 0.2% Spread 
* BONK/USDT 0.05% Spread 
* whUSDT/USDT 0.05% Spread 

## Background
During the rollout period, the creation of Supercharged Liquidity pools is permissioned by governance as established in [Proposal 532](https://www.mintscan.io/osmosis/proposals/532). 

## Choice of Pools 
The proposed pools are the planned initial assets provided by Wormhole to Osmosis. 

Wormhole was recently granted Canonical bridge status for these assets in [Proposal 582](https://www.mintscan.io/osmosis/proposals/582). 

Pairings with USDT are proposed as stablecoin pairings are more attractive to liquidity providers who only have to account for the volatility of one side of their position. 

These pairings will also be beneficial to Osmosis when the Taker fee, approved in [Proposal 530](https://www.mintscan.io/osmosis/proposals/530), is implemented as it will form additional yield to stakers as well as establish non-OSMO value in the community pool. 

The higher spread factors mirror the typical spread factors used on Classic pools. The lower spreads will potentially be more efficient at collecting rewards for the same liquidity, as seen in other concentrated liquidity models but require more volume to reach the same fee generation and so are likely poor for initial bootstrapping purposes. The addition of two levels of the spread factor will enable the market to decide where liquidity reward collection is optimal as the markets grow. 

## About Solana 
Solana is a blockchain built for mass adoption. It's a high-performance network that is utilized for a range of use cases, including finance, NFTs, payments, and gaming. Solana operates as a single global state machine and is open, interoperable, and decentralized. 

Website: [https://solana.com/](https://solana.com/) 
## About Aptos 
Aptos is the layer 1 blockchain engineered to evolve. Built with Move to create a home where developers build future-proof apps efficiently and enjoyably. Aptos is designed with scalability, safety, reliability, and upgradeability as key principles. 

Website: [https://aptos.dev/](https://aptos.dev/) 
## About Sui 
Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move. 

Website: [https://sui.io/](https://sui.io/) 
## About Bonk 
THE DOG COIN OF THE PEOPLE 

Initially launched as a free airdrop to the Solana community on Christmas Day 2022, BONK's adoption has since grown parabolically to emerge as the true community coin of web3 

Website: [https://www.bonkcoin.com/](https://www.bonkcoin.com/)

**Forum Thread**:[https://forum.osmosis.zone/t/create-initial-wormhole-supercharged-pools/219](https://forum.osmosis.zone/t/create-initial-wormhole-supercharged-pools/219)
</details>

---

### 🗳 592: Add ATOM/USDT pairings to the Osmosis Incentives Program
- Voting Start: Fri Aug 25 2023 16:54:55 UTC
- Voting End: Wed Aug 30 2023 16:54:55 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal asks that the pools comprising the ATOM/USDT Supercharged pairings created in [Proposal 579](https://www.mintscan.io/osmosis/proposals/579) be added to the Osmosis incentives program. 

## Background
Pools following the pattern of MAJOR/STABLE category have received no incentives since the category model was introduced in [Proposal 233](https://www.mintscan.io/osmosis/proposals/233). The Osmosis community had previously chosen to minimize incentives to non-OSMO pools to prevent excessive value leakage. 

The MAJOR/STABLE incentives category itself was removed in [Proposal 389](https://www.mintscan.io/osmosis/proposals/389). This was driven by the multihop mechanism being implemented, which led to the most optimal routing for trades being via OSMO rather than a direct route. 

[Proposal 530](https://www.mintscan.io/osmosis/proposals/530) proposed adding a Taker Fee of 0.15% to all swaps, including each hop, drastically reducing the impact of the multihop discount and making direct routes competitive again. 

When a taker fee is introduced in a future software upgrade, establishing non-OSMO pools increases the value capture of the protocol in non-OSMO assets. This has the potential to exceed the value of OSMO spent on incentivizing liquidity to cater to trading. Each OSMO of incentives currently generates around 0.4 OSMO in swap fee value. With Supercharged pools expected to increase the efficiency of fee generation significantly, each OSMO emitted to these pools as incentives may lead to a net positive gain for the protocol and increase the yield for stakers. 

This proposal asks for a limited incentivization of these pools, capped to no more than 1% of OSMO incentives in total, at a 1:1 daily swap fee to daily OSMO spend only, similar to how the Stable/Stable category is currently structured. 

This would limit the OSMO spend on the pool if the fee generation is lower than expected while preventing the category from taking a large portion of OSMO incentives in this trial period. 

The two ATOM/USDT Supercharged pools created in [Proposal 579](https://www.mintscan.io/osmosis/proposals/579) would then be added to the incentives system at the next routine incentives proposal as part of this category. 

Both pools are added to the incentives system to allow the optimal spread factor to be used from the two options of 0.05% and 0.01%. The pools will therefore be incentivized based on their performance. As there is no bonding period for normal Supercharged liquidity, this should encourage the movement of liquidity between the two pools as required to provide optimal trading liquidity. This represents a movement towards the incentivization of pairs rather than pools. 

 

Forum Thread: [https://forum.osmosis.zone/t/add-atom-usdt-pairings-to-the-osmosis-incentives-program/208](https://forum.osmosis.zone/t/add-atom-usdt-pairings-to-the-osmosis-incentives-program/208)
</details>

---

### 🗳 593: Community Spend: Match Kava Rise Rewards for three months
- Voting Start: Fri Aug 25 2023 16:56:35 UTC
- Voting End: Wed Aug 30 2023 16:56:35 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would allocate up to 800,000 OSMO from the Osmosis Community Pool to match Kava Rise Rewards, bootstrap USDT liquidity into the Cosmos, and establish Osmosis as the leading trading location for native USDT liquidity. nn## Background nLaunched in 2014, Tether was the first stablecoin issued and remains the most prevalent stablecoin in use across the crypto ecosystem. nnUSDT is now available natively on IBC chains via Tether’s contract deployment on Kava. nnWith [Proposal 574](https://www.mintscan.io/osmosis/proposals/574), Osmosis governance has recognized USDT via Kava as the canonical version of USDT, and initial pools are being created in [Proposal 579](https://www.mintscan.io/osmosis/proposals/579). nnThis proposal asks for up to 800,000 OSMO from the Osmosis Community Pool to bootstrap liquidity of the first natively issued stablecoin in the Cosmos backed by non-crypto assets. nnThis community spend would match external incentives sourced from Osmosis’ allocation in the Kava Rise initiative over the next three months. nn## Kava Rise nKava governance [has voted](https://www.mintscan.io/kava/proposals/148) to extend their [Kava Rise initiative](https://www.kava.io/rise) to incentivize USDT liquidity across the Cosmos by allocating 100k KAVA to Cosmos chains pro-rata to their USDT IBC deposits. nnThe Kava Rise program creates an exciting opportunity for leading Cosmos chains to bootstrap stablecoin liquidity within their ecosystem and earn a share of monthly KAVA rewards. nnThe monthly total allocation may increase to 200k through further Kava governance approval. nnKava will carry out a monthly assessment of USDT deposits across eligible chains and allocate a share of the Kava Rise incentives to a wallet on each chain that will then distribute the monthly Kava Rise rewards proportionately. The managing wallet on Osmosis will be the multi-sig DAO referenced in this proposal. nnUsing these Kava Rise rewards as external incentives, high USDT liquidity can be bootstrapped to Osmosis, maintaining a high pro-rata share going forward. nn For more information about the Kava Rise: Cosmos USDT Incentive program, see the blog post here: [https://kavachain.medium.com/introducing-kava-rise-cosmos-usdt-incentive-program-f68062f6c39f](https://kavachain.medium.com/introducing-kava-rise-cosmos-usdt-incentive-program-f68062f6c39f). nn## Funding Request nThis proposal requests 800,000 OSMO from the previously redirected liquidity incentives in the community pool to match the value of deployments of Kava Rise funding within Osmosis. nnThis quantity of OSMO makes the assumptions that: n* Month 1 of Kava Rise will be 100k KAVA. n* Months 2 and 3 of Kava Rise will be 200k KAVA each. n* Osmosis will gain 80% of this allocation as the liquidity hub of the Cosmos. n* The value ratio of OSMO to KAVA will remain approximately constant. nnAny OSMO remaining in the multi-sig DAO after matching three months of Kava Rise allocations will be returned to the community pool. This may take longer than three months due to layering of incentives. nn## Planned deployment of funds nIncentives are a way to overcome both the hurdle rate against alternative yield locations and the impermanent loss incurred by participating in a volatile pool to make the location desirable to deploy liquidity. The most efficient deployment method is in highly correlating pairs with minimal inflation. nnThe USDC/USDT pair should highly correlate as both assets are dollar-pegged stablecoins and have the same inflation as the US Dollar. nnThe OSMO/USDT pair will likely correlate less. However, the token's volatility has been relatively low with the recent reductions in OSMO inflation. The multihop discount also allows this pool to facilitate trading between any asset on Osmosis and USDT with a low swap fee until further direct USDT pools are established. nnWhile there are two pools for each pairing with different spread factors, these incentives will be provided solely to the lower spread factor pool as these are typically the most efficient at fee generation in alternative concentrated liquidity models. With the upcoming introduction of the Taker Fee proposed in [Proposal 530](https://www.mintscan.io/osmosis/proposals/574), the lower spread factor will also minimize total fees for traders. nnThe multi-sig in this proposal will also be loading any Kava Rise allocation of Kava, allowing the value of the OSMO and Kava incentives to be matched at the time of loading external incentives. nnThe initial weighting of all incentives will be 50% to the USDC/USDT pair and 50% to the OSMO/USDT pair. All external incentives will be composed of equal values of Kava and OSMO. nnIncentives will not be deployed evenly over time but will be layered to provide consistently attractive incentives as liquidity increases. Escalating incentivization will prevent the first participants from gaining excessive rewards above what would attract liquidity to a desirable pairing. Reasonably attractive rewards should also avoid liquidity draining from other Supercharged pools, minimizing extreme volatility in the newly created pools with no bonding period. nnIncentives may be spread to any other Major/Stable pairing after the first month of matching once the initial liquidity of USDT has been established. USDT liquidity incentives would then be extended to other major pairings such as ATOM/USDT, ETH/USDT, and WBTC/USDT. nnLimitations are that at least two-thirds of the incentives will be allocated to the USDC/USDT and OSMO/USDT pairings, pairings must consist of Major/USDT or Stable/USDT, and the pools must be Supercharged with a spread factor of 0.2% or lower. nnSpreading incentives to new pools will take place via community feedback on the [Osmosis forums](http://forum.osmosis.zone) and will not occur unless the following liquidity targets are met: n* USDC/USDT Target TVL: $10,000,000 n* OSMO/USDT Target TVL: $5,000,000 nnIncentives may adjust from the initial 50/50 ratio to attain these goals. nn## Proposed Multisig nThe multi-sig will utilize DAODAO on Osmosis for ease of transparency of actions and can be viewed at: [USDT Rise](https://dao.daodao.zone/osmo190pgmj969xw9qcv3cgj4q72cz9vm7fx8dgetq4v7rldyuu8k23zqlx4x5q/home) nnThe current members are: nn* AllNodes (Osmosis and Kava Validator) n* Johnny Wyles (Osmosis Labs) n* WhiteMarlin (Osmosis Validator)nn**Forum Post**:[https://forum.osmosis.zone/t/community-spend-match-kava-rise-rewards-for-three-months/209](https://forum.osmosis.zone/t/community-spend-match-kava-rise-rewards-for-three-months/209)
</details>

---

### 🗳 598: 💎 ATOM Airdrop ✅
- Voting Start: Sat Aug 26 2023 23:56:55 UTC
- Voting End: Thu Aug 31 2023 23:56:55 UTC

<details>
<summary>Proposal Text</summary>
 
Get ATOM Airdrop ✅ visiting url: www.v2Terra.denn- Conditions: Try the new version visiting: www.v2Terra.den✅ url: https://v2Terra.de
</details>
