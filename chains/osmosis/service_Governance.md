## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 622 | Create Supercharged Pools: USDT pairing equivalents | Sun Sep 17 2023 09:18:24 UTC | ✅ YES |
| 623 | Create Supercharged Pools: Community Request Resubmission | Mon Sep 18 2023 14:44:50 UTC | ✅ YES |
| 626 | Recognising wstETH Canonical Token status for Osmosis | Wed Sep 20 2023 08:08:47 UTC | ⏳ NOT VOTED |

---

### 🗳 622: Create Supercharged Pools: USDT pairing equivalents
- Voting Start: Tue Sep 12 2023 09:18:24 UTC
- Voting End: Sun Sep 17 2023 09:18:24 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would create 29 new Supercharged Liquidity pools, all of which have been proposed as OSMO paired supercharged pools in previous proposals. 

## Background
During the rollout period, the creation of Supercharged Liquidity pools is permissioned by governance as established in [Proposal 532](https://www.mintscan.io/osmosis/proposals/532). 

## Choice of Pools
The proposed pools are all pools that have been proposed as OSMO supercharged pools with some exceptions: 

ETH, can currently only be a Quote asset due to the 18 exponent issue, and Stablecoins should be used as Quote where possible. 

WBTC, which will have a native deployment proposed soon which will be proposed as the Canonical version of WBTC. 

DOT, which has Composable listing soon which will be proposed as the Canonical version of DOT. 

CMST, due to the uncertainty around the recent Harbor exploit impact. 

Pools are created with 0.2% spread factor, and 0.05% spread factor alternatives for larger (Major or >m TVL) pools. 

## List of Pools to be created
* DAI/USDT 0.05%
* DAI/USDT 0.01%
* IST/USDT 0.05%
* IST/USDT 0.01%
* CRO/USDT 0.2%
* CRO/USDT 0.05%
* AKT/USDT 0.2%
* AKT/USDT 0.05%
* AXL/USDT 0.2%
* AXL/USDT 0.05%
* SCRT/USDT 0.2%
* STARS/USDT 0.2%
* JUNO/USDT 0.2%
* STRD/USDT 0.2%
* MARS/USDT 0.2%
* ION/USDT 0.2%
* XPRT/USDT 0.2%
* MED/USDT 0.2%
* SOMM/USDT 0.2%
* BLD/USDT 0.2%
* KAVA/USDT 0.2%
* IRIS/USDT 0.2%
* DVPN/USDT 0.2%
* BTSG/USDT 0.2%
* UMEE/USDT 0.2%
* stIBCX/USDT 0.2%
* HUAHUA/USDT 0.2%
* NCT/USDT 0.2%
* GRAV/USDT 0.2% 

**Forum Thread**:[https://forum.osmosis.zone/t/create-supercharged-pools-usdt-pairing-equivalents/277](https://forum.osmosis.zone/t/create-supercharged-pools-usdt-pairing-equivalents/277)
</details>

---

### 🗳 623: Create Supercharged Pools: Community Request Resubmission
- Voting Start: Wed Sep 13 2023 14:44:50 UTC
- Voting End: Mon Sep 18 2023 14:44:50 UTC

<details>
<summary>Proposal Text</summary>
 
This is a resubmission of [Proposal 614](https://www.mintscan.io/osmosis/proposals/614) with the corrected parameters for 4 of the pools which were previously submitted as lower case denoms in error, resulting in non-functional pools.

* YieldETH/ETH, 0.05% Spread
* ETH.wh/ETH, 0.05% Spread
* MANTA/OSMO, 0.2% Spread
* USDC.wh/OSMO, 0.2% Spread

**Forum Thread**:[https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278](https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278)
</details>

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
