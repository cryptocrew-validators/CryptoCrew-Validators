## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 626 | Recognising wstETH Canonical Token status for Osmosis | Wed Sep 20 2023 08:08:47 UTC | ⏳ NOT VOTED |
| 627 | Migrate Superfluid Supercharged positions to a Wider Range | Sat Sep 23 2023 08:58:01 UTC | ⏳ NOT VOTED |

---

### 🗳 626: Recognising wstETH Canonical Token status for Osmosis
- Voting Start: Fri Sep 15 2023 08:08:47 UTC
- Voting End: Wed Sep 20 2023 08:08:47 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal signals that Osmosis adopts wstETH via Neutron as the canonical version of wstETH. 

## Details 
This proposal signals that wstETH minted via Neutron will be the canonical version of wstETH in use on Osmosis, replacing the current version that arrives as a representative of the token minted on Ethereum via the Axelar bridge. 

wstETH currently exists on Osmosis via Axelar, however the bridging fees for token movements have led to this not being widely adopted within the Cosmos despite the increasing prevalence of Liquid Staked Tokens in the ecosystem. 

wstETH on Neutron is minted as a wrapper contract that will serve as a bridge agnostic anchor for wstETH across the Cosmos. Initially, this will be integrated with Axelar as the provider and may be upgraded into a multibridge solution in the future without changing the denomination. 

For further information on the technical implementation of wstETH on Neutron see this [forum post](https://research.lido.fi/t/lido-on-cosmos-initial-deployment/5338). 

Canonical status sets the following agreement: 

**Default Asset List** – assets will be unprefixed in the app.osmosis.zone default asset list, e.g. wstETH with all other bridges’ assets being bridge1wstETH, bridge2wstETH, etc. Osmosis DAO requests that allied/friendly front-ends do the same, though any front-end is free to make its own decisions. 

**Osmosis Incentives** – the DAO commits to prioritizing the Canonical Bridge assets, incentivizing them earlier and more heavily than the comparable assets of non-canonical bridges. In general, canonical pools should earn substantially more incentives per dollar of liquidity than their counterpart pools–under the base incentives model, not necessarily counting external incentive matching. 

Forum Thread: [https://forum.osmosis.zone/t/recognising-wsteth-canonical-token-status-for-osmosis/299](https://forum.osmosis.zone/t/recognising-wsteth-canonical-token-status-for-osmosis/299)
</details>

---

### 🗳 627: Migrate Superfluid Supercharged positions to a Wider Range
- Voting Start: Mon Sep 18 2023 08:58:01 UTC
- Voting End: Sat Sep 23 2023 08:58:01 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal approves migrating Superfluid positions in Supercharged pools to a wider full range in a future software upgrade. 

Impacted liquidity positions would be adjusted from a minimum spot price of 10^-12 to 10^-30, keeping the number of Supercharged pool types to maintain at one but slightly reducing capital efficiency. 
## Background 
Supercharged Liquidity pools have been live on Osmosis since the [V16 upgrade](https://www.mintscan.io/osmosis/proposals/556). 

Most quote assets have a six decimal accuracy (exponent), as this is typical with tokens minted on Cosmos chains. EVM tokens typically have a decimal accuracy of eighteen. 

This means that the minimum price of the smallest unit of an EVM token is equal to 10^-12 of the quote asset, effectively scaling the asset's spot price down by 10^12. 

The initial implementation of Supercharged pools only supported a minimum spot price of 10^-12 in order to accelerate the launch process. This made any use of pairings with the possibility of the price decreasing under a 1:1 ratio, e.g.MATIC/USDT with a current 0.55:1 ratio, impossible until the technical issues behind storing more extreme comparative spot prices were resolved. 
## Implemented Solution 
The minimum spot price has been able to be reduced. However, this now changes what full range refers to in a Supercharged pool from having a lower bound of 10^-12 to having a lower bound of 10^-30. 

This adjustment in the minimum spot price has introduced two potential approaches: 
* Maintaining two versions of liquidity pools, each with a different minimum spot price (10^-12 for pre-upgrade and 10^-30 for post-upgrade). 
* Implementing an upgrade handler migration of full range positions from the 10^-12 minimum spot price range to the 10^-30 range. 
## Maintenance or Migration 
Maintaining two versions of Supercharged pools will cause an increase in difficulty in future developments. 
* All work on the Osmosis chain code must be duplicated for the two minimum spot prices. 
* All integrations will also have to differentiate which pool type each asset uses, slowing the development of all frontends. 

There are also direct performance losses by calculations having to iterate over two pool types, which may not be directly compared. 

The main impact of migration is that these positions will now occupy a wider range than before. As with Supercharged pools allowing liquidity to be concentrated to increase capital efficiency, this reduction in the concentration of a full range position brings with it a reduction in the capital efficiency of full range positions. 

The worst-case impact of this is calculated to be a 0.01 percent reduction in capital efficiency in the current lowest spot price pool and so can be considered to be negligible. For most pools the impact would be orders of magnitude smaller as they have a higher spot price. 

The migration also carries a risk by directly impacting the chain state and user positions. However, it is the better option for development sustainability. This risk must be mitigated as much as possible. 
## Migration Risk Mitigation 
The migration is proposed to be carried out only on Superfluid positions as only these are required to be full range. 

The previous “full range” pools that are not Superfluid can continue to exist on the previously established range within the new range as a custom position. 

Only Superfluid positions will then be affected by this migration, reducing the number of users and the amount of liquidity affected by the upgrade handler changes and so reducing overall risk. 

The risk to the impacted positions will be minimized through thorough testing on a copy of mainnet state before the upgrade is performed. Most of the code changes necessary for this refactor have been made state-compatible with the original notion of the full range. As a result, they can be backported to the current mainnet binary and be tested more fully against a real node. 

**Forum Thread:** [https://forum.osmosis.zone/t/migrate-superfluid-supercharged-positions-to-a-wider-range/327](https://forum.osmosis.zone/t/migrate-superfluid-supercharged-positions-to-a-wider-range/327)
</details>
