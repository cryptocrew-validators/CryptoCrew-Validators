## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 631 | Upload CrossChain Registry Contract V1 | Tue Sep 26 2023 15:35:43 UTC | ✅ YES |
| 632 | Upload Crosschain Swaps Contract V2 | Tue Sep 26 2023 15:39:14 UTC | ✅ YES |
| 633 | Upload Swaprouter Contract V2 | Tue Sep 26 2023 15:40:14 UTC | ✅ YES |
| 634 | Enable Permissionless Creation of Supercharged Pools | Thu Sep 28 2023 10:57:09 UTC | ✅ YES |
| 638 | Remove Incentives from Non-Strategic Pools | Sun Oct 01 2023 00:43:03 UTC | ⏳ NOT VOTED |

---

### 🗳 631: Upload CrossChain Registry Contract V1
- Voting Start: Thu Sep 21 2023 15:35:43 UTC
- Voting End: Tue Sep 26 2023 15:35:43 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload V1 of the Crosschain Registry contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V1 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: 5780a3358cd917fcf05d9f181c56f26904ae45fa68cc355738a75ad263458390 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>

---

### 🗳 632: Upload Crosschain Swaps Contract V2
- Voting Start: Thu Sep 21 2023 15:39:14 UTC
- Voting End: Tue Sep 26 2023 15:39:14 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload an updated version of the Crosschain Swaps contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V2 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: 3839d7281088f0152f643d57854e0625fd709db151e6dfe12da02f00efc3477e 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>

---

### 🗳 633: Upload Swaprouter Contract V2
- Voting Start: Thu Sep 21 2023 15:40:14 UTC
- Voting End: Tue Sep 26 2023 15:40:14 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload an updated version of the Swaprouter contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V2 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: f8fca2b93dcd4cf0b41b964ba4c6523094dd3097c3269bc88c87f68edc0a9c00 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>

---

### 🗳 634: Enable Permissionless Creation of Supercharged Pools
- Voting Start: Sat Sep 23 2023 10:57:09 UTC
- Voting End: Thu Sep 28 2023 10:57:09 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would enable the permissionless creation of Supercharged pools, allowing pools to be created by any user. nnThis proposal also pre-approves the creation and migration linking of the remaining incentivized Classic pools that do not have a Supercharged equivalent. nnThis proposal also validates the Pool Creation fee as 1000 OSMO as adjusted during the v19 upgrade. nn## Background nDuring the rollout period, the creation of Supercharged Liquidity pools has been permissioned by governance as established in [Proposal 532](https://www.mintscan.io/osmosis/proposals/532) nnThere were three main reasons for this. n* Preventing large numbers of Supercharged pools from being created for each asset, causing liquidity fragmentation. n* Suboptimal parameters being selected for a pool n* Over-complication of migration linking by having multiple migration options. nn**Liquidity fragmentation** nLiquidity fragmentation has been addressed through the whitelisting of both Quote assets and available Spread factors. While this allows multiple pairings possible for each asset, there is still a finite number of pools between which liquidity can be fragmented. As liquidity pairings will have different levels of trading possible, the numbers of pools should be proportionate to the popularity of the base asset. nnIn the recent software upgrade, the pool creation fee was set to 1000 OSMO as part of the taker fee implementation rather than the 100 OSMO previously approved by governance. As this has been [discussed on the forums](https://forum.osmosis.zone/t/proposals-addressing-scam-pools-increase-the-pool-creation-fee/42) but never proposed, no proposal has been made to rectify this setting. This proposal confirms that the pool creation fee will remain at 1000 OSMO and assist in forming deliberate pools to minimize liquidity fragmentation. nnThe creation of bulk Supercharged pools may still occur with no creation fee via the governance process. nn**Suboptimal parameters** nSince the initial launch of Supercharged liquidity, the creation process has also been simplified by removing the `exponentatpriceone` parameter, decreasing the variability of the pools. nnAll other parameters are currently whitelisted with a currently allowed range of: n* Seven spread factors n* Seven quote denoms n* Four tick spacings nnWhile this gives a potential combination of 196 pools for any base asset, the number of these created will likely be proportional to the demand for different routes and other attributes of the base asset. nn**Over-complication of migration linking** nMost incentivized classic pools have been linked, with only the 18 exponent bases still pending, being created in a future software upgrade. Supposing one of these pools is created before this software upgrade. In that case, the pool will not be functional for trading, so minimal liquidity will be added. nnTo preemptively simplify the creation and linking of these pools, this proposal acts similarly to [Proposal 571](https://www.mintscan.io/osmosis/proposals/571) by signaling the creation of Supercharged pools for the remaining incentivized OSMO paired pools that have not migrated to Supercharged liquidity. nnAny pools with Superfluid enabled must have liquidity and spot price established in the Supercharged pool at the time of upgrade. The upgrade handler will pair 1 OSMO with each required asset at a spot price within 0.1% of the spot price in the pool with the newly established Migration link at the time of upgrade using community pool funds, capped at 10 OSMO for safety reasons. nnThe pools created will maintain their current Spread Factor and Superfluid status and are the following, with the linked pools attached. n* ARB/OSMO - Pool 1011 n* AVAX/OSMO - Pool 899 n* BNB/OSMO - Pool 1060 n* EVMOS/OSMO - Pool 722 n* FET/OSMO - Pool 681 n* INJ/OSMO - Pool 725 n* MATIC/OSMO - Pool 789 n## Why Enable Permissionless Creation Now? nWhile some incentivized pools are still pending migration, this proposer believes that the time is right to enable permissionless creation of pools. nnWith the arrival of multiple native IBC assets on Osmosis such as [USDC](https://www.mintscan.io/osmosis/proposals/624), [WBTC](https://www.mintscan.io/osmosis/proposals/604) and [wstETH](https://www.mintscan.io/osmosis/proposals/626), Osmosis will benefit from faster creation of pools able to utilize these assets. nnThere have also started to be proposals on the forums from teams who want to see specific pools available as Supercharged versions such as [stOSMO/OSMO](https://forum.osmosis.zone/t/stosmo-osmo-supercharged-pool-creation/361) as well as specific requests for USDC pairings by teams who are slowed by the governance process. Allowing permissionless creation will enable teams who want to bootstrap a pool with particular settings to do so. nn**Forum Thread**:[https://forum.osmosis.zone/t/enable-permissionless-creation-of-supercharged-pools/369](https://forum.osmosis.zone/t/enable-permissionless-creation-of-supercharged-pools/369)
</details>

---

### 🗳 638: Remove Incentives from Non-Strategic Pools
- Voting Start: Tue Sep 26 2023 00:43:03 UTC
- Voting End: Sun Oct 01 2023 00:43:03 UTC

<details>
<summary>Proposal Text</summary>
 
This is a signaling proposal to remove incentives from all pools that contain assets that are not one of the following:nnUSDCnUSDTnDAInWBTCnETHnATOMnOSMOnstETHnstATOMnstOSMOnIBCXnnIf passed the changes will be made during the next routine monthly incentives prop in early October.nnSee further discussion and analysis on the community forum: https://forum.osmosis.zone/t/remove-lp-incentives-from-non-strategic-pools/367
</details>
