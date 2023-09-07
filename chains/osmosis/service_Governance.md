## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 610 | Expedited: Repair migration for already approved CL pools | Sun Sep 03 2023 08:07:10 UTC | ❌ NO |
| 611 | Expedited: Repair migration for already approved CL pools | Sun Sep 03 2023 10:08:47 UTC | ⏳ NOT VOTED |
| 612 | Implement Composable's Centauri bridge as the canonical route to the Polkadot and Kusama ecosystem | Mon Sep 04 2023 21:20:07 UTC | ✅ YES |
| 613 | Routine Incentive Adjustment for September 2023 | Tue Sep 05 2023 07:42:09 UTC | ✅ YES |
| 614 | Create Supercharged Pools: Community Requests | Tue Sep 05 2023 07:43:01 UTC | ⏳ NOT VOTED |
| 616 | Incentivise SOL/USDT Supercharged Pools | Wed Sep 06 2023 16:26:34 UTC | ⏳ NOT VOTED |
| 617 | Incentivise APT/USDT Supercharged Pools | Wed Sep 06 2023 16:26:46 UTC | ⏳ NOT VOTED |
| 618 | Incentivise SUI/USDT Supercharged Pools | Wed Sep 06 2023 16:26:52 UTC | ⏳ NOT VOTED |

---

### 🗳 610: Expedited: Repair migration for already approved CL pools
- Voting Start: Sun Sep 03 2023 08:07:10 UTC
- Voting End: Fri Sep 08 2023 08:07:10 UTC

<details>
<summary>Proposal Text</summary>
 
There was a code bug in the logic that executed [Proposal 597](https://www.mintscan.io/osmosis/proposals/597). This has resulted in there being only one Supercharged pool linked to its corresponding Classic pool (stATOM/ATOM). 

This has the impact that: 
* Classic positions cannot be migrated to the new Supercharged Pools. 
* Incentives are only being sent to the Supercharged pools, not the already established full range classic positions as well. 
* Liquidity in Supercharged pools is over-incentivized until this proposal passes. 

This proposal restores the Classic to Supercharged pool links and allows incentives to be distributed as intended. This is an expedited proposal in order to minimize the time that incentives are distributed incorrectly. 

As an expedited proposal, this proposal will pass as long as two-thirds of voting power votes within the first 24 hours. This will cause incentives to resume distribution to Classic pools at Epoch on the 5th September. If this threshold is not met, then this proposal will revert to a five-day proposal, and intended incentive distribution will resume on the 9th September if the proposal is successful.
</details>

---

### 🗳 611: Expedited: Repair migration for already approved CL pools
- Voting Start: Sun Sep 03 2023 10:08:47 UTC
- Voting End: Fri Sep 08 2023 10:08:47 UTC

<details>
<summary>Proposal Text</summary>
 
There was a code bug in the logic that executed [Proposal 597](https://www.mintscan.io/osmosis/proposals/597). This has resulted in there being only one Supercharged pool linked to its corresponding Classic pool (stATOM/ATOM). 

This has the impact that: 
* Classic positions cannot be migrated to the new Supercharged Pools. 
* Incentives are only being sent to the Supercharged pools, not the already established full range classic positions as well. 
* Liquidity in Supercharged pools is over-incentivized until this proposal passes. 

This proposal restores the Classic to Supercharged pool links and allows incentives to be distributed as intended. This is an expedited proposal in order to minimize the time that incentives are distributed incorrectly. 

As an expedited proposal, this proposal will pass as long as two-thirds of voting power votes within the first 24 hours. This will cause incentives to resume distribution to Classic pools at Epoch on the 5th September. If this threshold is not met, then this proposal will revert to a five-day proposal, and intended incentive distribution will resume on the 9th September if the proposal is successful.
</details>

---

### 🗳 612: Implement Composable's Centauri bridge as the canonical route to the Polkadot and Kusama ecosystem
- Voting Start: Mon Sep 04 2023 21:20:07 UTC
- Voting End: Sat Sep 09 2023 21:20:07 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would recognize Composable's Centauri bridge as the canonical route to the Polkadot and Kusama ecosystem for Osmosis. 

It would also establish Supercharged pools of OSMO/DOT and USDT/DOT as well as signal the migration of incentives from the OSMO/axlDOT pool to the new OSMO/DOT pool. 

## Background

DOT within the Cosmos ecosystem, specifically Osmosis DEX, is currently sourced via multiple bridges provided by a combination of the Moonbeam and Axelar networks. This results in tokens wrapped by multiple protocols to enable axlDOT within Osmosis DEX. 

For increased fungibility in a cross-chain environment, it becomes paramount to reduce the number of networks used to transfer an asset and, thus, reduce the number of times a token must be wrapped from source to destination. 

In the current environment, DOT must be moved into Moonbeam and transferred through Axelar's satellite bridge to reach its final destination on Cosmos. With the introduction of Composable's Centauri bridge, we propose a migration from axlDOT to DOT sourced directly from Polkadot over Centauri, referred to as ibcDOT in this proposal for clarity. 

**About Composable and Centauri**
Composable (comprised of Picasso network on Kusama, and eventually Composable network on Polkadot) acts as an infrastructure layer for asset transfers. The chain is made up of three components: i) the base layer L1, Picasso, which houses Pablo DEX and CosmWasm VM for smart contract deployment within Kusama, ii) Centauri, the transfer layer that enables bridging of assets over IBC, and iii) the composable virtual machine (in development), which enables smart contract orchestration between chains connected via Centauri. 

Centauri is an IBC enabled chain within the Cosmos ecosystem that operates as an intermediary between source and destination to transfer assets via IBC. For example, assets transferred from Picasso (on Kusama) would follow the route of Picasso -> Centauri -> Cosmos Destination Chain; in the case of transfers from Polkadot, and additional hop would be needed and would follow the route of Polkadot -> Picasso -> Centauri -> Cosmos Destination Chain. The transfer routes are able to be abstracted away via frontend, whereas only source and destination are conveyed to the end user. Currently, Centauri connects the Polkadot and Kusama ecosystems, as well as connecting these chains to ten Cosmos app chains. As of the time of writing, Centauri is connected to Cosmos Hub, Osmosis, Neutron, Stride, Umee, Agoric, Stargaze, Secret, Crescent, and Chihuahua within the Cosmos. 

With Centauri being built using IBC, we believe assets entering the Cosmos ecosystem should adhere to the transfer protocol used by the network. Therefore, an IBC-based bridging solution makes the most sense for transferring assets into the Cosmos ecosystem. 

## Method
This proposal would recognize the DOT arriving over the Centauri bridge as the canonical version of DOT, renaming the current DOT in use on Osmosis to axlDOT. 

This proposal directly creates Supercharged Liquidity pools of USDT/DOT and OSMO/DOT with 0.2% spread factors. 

This proposal would also migrate incentives from the OSMO/axlDOT Supercharged pool, 773, to the newly created OSMO/ibcDOT Supercharged pool, at the next monthly incentive proposal. 

## Canonical Status
Canonical status sets the following agreement: 
 **Default Asset List**
Assets will be unprefixed in the app.osmosis.zone default asset list, e.g. DOT with all other bridges' assets being bridge1DOT, bridge2DOT, etc. Osmosis DAO requests that allied/friendly front-ends do the same, though any front-end is free to make its own decisions. 

**Osmosis Incentives** 
The DAO commits to prioritizing the Canonical Bridge assets, incentivizing them earlier and more heavily than the comparable assets of non-canonical bridges. In general, canonical pools should earn substantially more incentives per dollar of liquidity than their counterpart pools–under the base incentives model, not necessarily counting external incentive matching. 

**Forum Thread**:[https://forum.osmosis.zone/t/implement-composable-s-centauri-bridge-as-the-canonical-route-to-the-polkadot-and-kusama-ecosystem/179](https://forum.osmosis.zone/t/implement-composable-s-centauri-bridge-as-the-canonical-route-to-the-polkadot-and-kusama-ecosystem/179)
</details>

---

### 🗳 613: Routine Incentive Adjustment for September 2023
- Voting Start: Tue Sep 05 2023 07:42:09 UTC
- Voting End: Sun Sep 10 2023 07:42:09 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal adjusts the Osmosis Liquidity Incentives emitted to each pool according to the methodology in [Proposal 578](https://www.mintscan.io/osmosis/proposals/578). 

 New Incentives and Targets can be found on the [Chaos Labs Dashboard](https://community-staging.chaoslabs.xyz/osmosis/incentives-optimization). 

 This proposal also actions the additions and migrations of USDT pool incentives passed in Proposals [590](https://www.mintscan.io/osmosis/proposals/590), [591](https://www.mintscan.io/osmosis/proposals/591) and [592](https://www.mintscan.io/osmosis/proposals/592)
</details>

---

### 🗳 614: Create Supercharged Pools: Community Requests
- Voting Start: Tue Sep 05 2023 07:43:01 UTC
- Voting End: Sun Sep 10 2023 07:43:01 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would create many new Supercharged Liquidity pools, which have either been requested by the community, are upcoming listings, initialized on StreamSwap, or historically had insufficient liquidity compared to trading demand without receiving incentives. 

**Stablecoin Pairings** 
* SILK/USDT 0.05% Spread 
* USK/USDT 0.05% Spread 

**Like Pairings** 
* YieldETH/ETH, 0.05% Spread
* ETH.hole/ETH, 0.05% Spread
* USDT.axl/USDT, 0.05% Spread

**Composable Pairings**
* KSM/OSMO, 0.2% Spread
* KSM/USDT, 0.2% Spread

**StreamSwap Alumni**
* PASG/USDT, 0.2% Spread
* MPWR/USDT, 0.2% Spread
* QSR/USDT, 0.2% Spread
* PICA/USDT, 0.2% Spread
* NLS/USDT, 0.2% Spread
* LORE/USDT, 0.2% Spread
* FLIX/USDT, 0.2% Spread

**High Slippage pools**
* ARCH/USDT, 0.2% Spread
* KUJI/USDT, 0.2% Spread
* LUNC/USDT, 0.2% Spread
* LUNA/USDT, 0.2% Spread
* NTRN/USDT, 0.2% Spread

**Requested**
* BCNA/USDT, 0.2% Spread
* CUDOS/USDT, 0.2% Spread
* JKL/USDT, 0.2% Spread
* MANTA/OSMO, 0.2% Spread
* REGEN/USDT, 0.2% Spread 
* SHD/USDT, 0.2% Spread
* USDC.hole/OSMO, 0.2% Spread
* WHALE/USDT, 0.2% Spread

## Background
During the rollout period, the creation of Supercharged Liquidity pools is permissioned by governance as established in [Proposal 532](https://www.mintscan.io/osmosis/proposals/532). 

## Choice of Pools
The proposed pools are those that have either been requested by the community for listing or have struggled to gain sufficient liquidity to facilitate trading by having consistently high swap APR and no incentives. 

As these are currently tail assets on Osmosis, they are being created with just the one higher spread factor, which should make LPing more profitable for immature markets compared to the current pools in use. 

This is 0.2% for volatile assets and 0.05% for Stable or Equivalent pairings. 

SILK and USK Supercharged pools add USDT pairings for two stablecoin projects that have never been incentivized outside of their native chains. 

YieldETH brings Sommelier's Real Yield ETH strategy into the Cosmos over the Axelar bridge. The addition of a Supercharged liquidity pool for this should allow functional trading to occur with minimal barriers from bridging fees. 

Wormhole pairings do not guarantee inclusion as verified assets, but provide an alternative liquidity route for assets transferred via Wormhole from Ethereum to trade on Osmosis until the future Transmuter contract is in use. 

Composable is preparing to launch the IBC connection to Polkadot, and this proposal would create initial pairings as Supercharged pools. 

StreamSwap alumni often have large pools from the initial launch, but have no stablecoin pairings. Several teams have requested Supercharged pools, so these are being proposed as a category. 

Current volatile Classic pools: 
* ARCH - [1061](https://app.osmosis.zone/pool/1061) - 47% Swap APR
* KUJI - [744](https://app.osmosis.zone/pool/1061) - 47% Swap APR 
* LUNA - [726](https://app.osmosis.zone/pool/726) -18% Swap APR, functional liquidity currently failing to establish on Osmosis. 
* LUNC - [800](https://app.osmosis.zone/pool/800) - 83% Swap APR
* NTRN - [1046](https://app.osmosis.zone/pool/1046) - 67% Swap APR

Requested by their communities include USDT pairings for pools of BCNA, CUDOS, JKL, REGEN, SHD and WHALE. 

MANTA will also be listed soon and wishes to have the liquidity efficiency that comes from the Supercharged pools. 

**Forum Thread**:[https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278](https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278)
</details>

---

### 🗳 616: Incentivise SOL/USDT Supercharged Pools
- Voting Start: Wed Sep 06 2023 16:26:34 UTC
- Voting End: Mon Sep 11 2023 16:26:34 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal asks that the pools comprising the SOL/USDT Supercharged pairings created in [Proposal 589](https://www.mintscan.io/osmosis/proposals/589) be added to the Osmosis incentives program and directly allocates 0.5% of incentives to each pool to bootstrap liquidity. 

This proposal would also recognize SOL as a Major asset. Although the category system is no longer in place since [Proposal 578](https://www.mintscan.io/osmosis/proposals/578) and so do not allocate additional rewards, this list can be used for reference of a group of strategically important assets for Osmosis. 
## About Solana
Solana is a blockchain built for mass adoption. It’s a high-performance network that is utilized for a range of use cases, including finance, NFTs, payments, and gaming. Solana operates as a single global state machine and is open, interoperable, and decentralized. 
Website: [https://solana.com/](https://solana.com/)

**Forum Thread**:[https://forum.osmosis.zone/t/incentivise-sol-usdt-supercharged-pools/271](https://forum.osmosis.zone/t/incentivise-sol-usdt-supercharged-pools/271)
</details>

---

### 🗳 617: Incentivise APT/USDT Supercharged Pools
- Voting Start: Wed Sep 06 2023 16:26:46 UTC
- Voting End: Mon Sep 11 2023 16:26:46 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal asks that the pools comprising the APT/USDT Supercharged pairings created in [Proposal 589](https://www.mintscan.io/osmosis/proposals/589) be added to the Osmosis incentives program and directly allocates 0.25% of incentives to each pool to bootstrap liquidity. 
## About Aptos
Aptos is the layer 1 blockchain engineered to evolve. Built with Move to create a home where developers build future-proof apps efficiently and enjoyably. Aptos is designed with scalability, safety, reliability, and upgradeability as key principles. 
Website: [https://aptos.dev/](https://aptos.dev/)

**Forum Thread**:[https://forum.osmosis.zone/t/incentivise-aptos-usdt-supercharged-pools/272](https://forum.osmosis.zone/t/incentivise-aptos-usdt-supercharged-pools/272)
</details>

---

### 🗳 618: Incentivise SUI/USDT Supercharged Pools
- Voting Start: Wed Sep 06 2023 16:26:52 UTC
- Voting End: Mon Sep 11 2023 16:26:52 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal asks that the pools comprising the SUI/USDT Supercharged pairings created in [Proposal 589](https://www.mintscan.io/osmosis/proposals/589) be added to the Osmosis incentives program and directly allocates 0.25% of incentives to each pool to bootstrap liquidity. 

## About Sui
Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move. 
Website: [https://sui.io/](https://sui.io/)

**Forum Thread**:[https://forum.osmosis.zone/t/incentivise-sui-usdt-supercharged-pools/273](https://forum.osmosis.zone/t/incentivise-sui-usdt-supercharged-pools/273)
</details>
