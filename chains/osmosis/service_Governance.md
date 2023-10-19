## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 656 | Reactivate expired IBC client 07-tendermint-2229 | Fri Oct 20 2023 04:17:13 UTC | ✅ YES |
| 657 | 💫 Celestia is coming to Osmosis  | Mon Oct 23 2023 02:56:52 UTC | ABSTAIN |
| 658 | Osmosis v20 Software Upgrade | Mon Oct 23 2023 09:02:54 UTC | ✅ YES |
| 659 | Upload Transmuter v2 - Alloyed Assets | Tue Oct 24 2023 09:14:03 UTC | ⏳ NOT VOTED |

---

### 🗳 656: Reactivate expired IBC client 07-tendermint-2229
- Voting Start: Sun Oct 15 2023 04:17:13 UTC
- Voting End: Fri Oct 20 2023 04:17:13 UTC

<details>
<summary>Proposal Text</summary>
 
Due to a relayer issue that resulted in the subject client exceeding the trusting period, the IBC client 07-tendermint-2229 used by channel-382 for OSMO transfers from Osmosis to Unification via IBC is currently in an expired state. If accepted, this proposal will reactivate the expired IBC client 07-tendermint-2229, using data from client 07-tendermint-2999. This is required to re-enable IBC transfers to Osmosis on channel-382
</details>

---

### 🗳 657: 💫 Celestia is coming to Osmosis 
- Voting Start: Wed Oct 18 2023 02:56:52 UTC
- Voting End: Mon Oct 23 2023 02:56:52 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 658: Osmosis v20 Software Upgrade
- Voting Start: Wed Oct 18 2023 09:02:54 UTC
- Voting End: Mon Oct 23 2023 09:02:54 UTC

<details>
<summary>Proposal Text</summary>
 
This is a proposal to do a software upgrade to the v20.0.0 software tag of the Osmosis codebase on block height **12028900**, which is estimated to occur on **Monday October 23rd, UTC 16:00**. Block times have high variance, so please monitor the chain for more precise time estimates. 
 ## Upgrade Features 
This upgrade adds the following features: 
**[Volume Splitting Incentives Mechanism](https://github.com/osmosis-labs/osmosis/issues/6057)** 
* Adds a new incentives mechanism that allows pools to be grouped into Volume Splitting Gauges and be incentivized as a set. 
* Incentives for pools within this set will re-adjust at each epoch to the volume ratio present in each pool over the last epoch. 
* This allows multiple pools of the same pairing with different specifications to be incentivized to allow incentives to be optimized around trading volume more rapidly. 
* This upgrade proposal creates groups containing the Classic and Supercharged pools with existing migration links between them and moves incentive allocation to incentivize these group gauges rather than the previous mechanism of sharing via the migration link. 

**Concentrated Liquidity modifications** 
* Concentrated Liquidity positions [can now be transferred](https://github.com/osmosis-labs/osmosis/pull/6623) to another address
* Added a parameter that allows governance to add addresses that can [create concentrated liquidity pools ignoring the Quote asset whitelist restriction](https://github.com/osmosis-labs/osmosis/pull/6420). 
* Added a parameter that allows governance to [add addresses that will be exempt from Taker Fees](https://github.com/osmosis-labs/osmosis/pull/6632). 

**Validator Set Preferences** 
* Allows users with defined validator sets to [unbond a pro rata amount of OSMO from all validators they are currently delegated to](https://github.com/osmosis-labs/osmosis/pull/6630). 

See the [Full Change Log](https://github.com/osmosis-labs/osmosis/blob/v20.0.0/CHANGELOG.md) for more API Breaking, State Breaking and other miscellaneous changes. 

## Getting Prepared for the Upgrade 
To build the binary, be sure to install golang 1.20. 
As always, we recommend validators utilize 64GB of RAM. Since state migration is relatively negligible in this upgrade, it is possible to get away with less, but still not recommended. If you are unable to have 64GB of RAM, at a minimum have a total of 64GB of swap set to prevent out of memory errors. 
If using Cosmovisor, manually build & copy the osmosisd binary to /cosmovisor/upgrades/v20/bin/. 
If not using Cosmovisor, wait for your node to halt at the upgrade height, then install and run the v20.0.0 binary. 
## Details of Upgrade Time 
The proposal targets the upgrade proposal block to be **12028900**, anticipated to be on **Monday October 23rd, UTC 16:00**. Note that block times have high variance, so keep monitoring the time. See countdown [HERE](https://www.mintscan.io/osmosis/block/12028900). 
The upgrade is anticipated to take approx 30 minutes, during which time, there will not be any on-chain activity on the network. 
In the event of an issue at upgrade time, we should coordinate via the validators channel in Discord to come to a quick emergency consensus and mitigate any further issues.
</details>

---

### 🗳 659: Upload Transmuter v2 - Alloyed Assets
- Voting Start: Thu Oct 19 2023 09:14:03 UTC
- Voting End: Tue Oct 24 2023 09:14:03 UTC

<details>
<summary>Proposal Text</summary>
 
Transmuter is a CosmWasm contract that allows 1:1 conversion of one asset to another by establishing a new CosmWasm pool type. 

Transmuter V2 adds to the functionality of these pools by adding key updates: 
* Shares of the pool are tokenized as “Alloyed Assets”. 
* Rate limits for the change in the quantity of contained assets. 
## Pool Function 
Once instantiated with two assets, the contract functions as a pool with a fixed 1:1 ratio of token value, no matter the ratio of the assets in the pool. 

For traders, this enables the Transmute function, which allows the exchange of 1 unit of value of a token they possess in the pool with 1 unit of value of any other token present in the pool without any slippage. 

For liquidity providers, one token can be added to the pool in exchange for a representative token of that value held within the pool. Owners of the representative tokens can choose which asset to withdraw from the pool. 

With zero slippage or fee, liquidity providers must either be altruistic or obtain an alternative benefit for adding tokens to the pool. 

## Alloyed Assets 
As Classic pools use a GAMM token to represent a share of the assets in the pool, a Transmuter v2 pool uses an Alloyed Asset denom. 

While GAMM tokens can represent a differing amount of liquidity of a token depending on the initial deposit to the pool, Alloyed Assets are always representative 1:1 of a deposited token denom in the Transmuter pool. This is because all tokens in the Transmuter pool are worth 1:1 relative to each other. 

These Alloyed Assets may then be used as a representative token of the basket of assets contained within the Transmuter pool. Whether an Alloyed Asset is considered to be the Canonical representation of the asset on the chain will depend on Osmosis governance approving the pool settings. 

The usage of Alloyed assets in alternative locations will provide an incentive for liquidity providers to keep both sides equally populated. For example, an Alloyed version of USDC paired with the native version at a low swap rate will enable a liquidity provider to hold a yield bearing USDC position with exposure only to the USDC asset and a lower bridge risk of the constituent tokens. They would then be incentivized to ensure that the Alloyed asset remained well balanced to minimize risk and maximize trading activity. 

**Example of Alloyed Asset user flow** 
For a hypothetical FOO.Alloyed representative share of a transmuter pool consisting of both FOO.Bridge1 and FOO.Bridge2 tokens. 
1 FOO.Alloyed = 1 FOO.Bridge1 = 1 FOO.Bridge2. 

The user flow for swapping from a deposited FOO.Bridge1 asset would be identical to a deposited FOO.Bridge2 token in that both would join the Transmuter pool in exchange for the FOO.Alloyed representative asset. 

Leaving the chain would similarly redeem FOO.Alloyed for the preferred amount of FOO.BridgeX and be able to cross the bridge to the destination chain. 

This process will take place within the swapping action at first, meaning that swapping by starting at a bridged asset or the alloyed asset would appear identical. The withdrawal and deposit process is manual at launch but may be further integrated using hooks in the future to abstract away the bridging action. 

## Limiters 
The Transmuter pool has built-in rate limitation settings which can prevent the ratio of tokens from changing excessively in a set period, this prevents an issue with one constituent from draining the effective liquidity of the pool. 

There are two types of limiters in place 
* **Change Limiter** determines the maximum percentage of an asset permitted to leave the pools based on the moving average of the asset’s weights over a specified period. 
* **Static Limiter** determines the maximum percentage of the pool allowed to be a specific asset, preventing imbalance from occurring or minimizing the exposure of the Alloyed asset to a particular constituent. 

**Example** 
The FOO.Alloyed pool is composed of 50% FOO.Bridge1 and 50% FOO.Bridge2. 

FOO.Bridge1 is compromised, and token supply on Osmosis suddenly increases due to this. 

The FOO.Alloyed pool has a Change Limiter in place of 10%/Day, 30%/Week and a Static Limiter in place of 0.6. 

On Day 1 the Change Limiter is hit, causing the imbalance to be frozen at 0.55 Bridge 1 and 0.45 Bridge 2. 

On Day 2 the Change Limiter would trigger at 0.605, however the Static Limiter caps the imbalance at 0.6, effectively freezing the pool until governance resolves the situation. 

This limits the amount of compromised FOO.Bridge1 that can be disposed of on Osmosis, allowing the governors of Bridge 1 time to repair the issue, and recover or resupply underlying funds if possible. 

## Admin Role 
The Admin Role can perform the following tasks: 

**Delegate Set Active Status** 
This allows the Admin to delegate a Moderator address to have the ability to disable the transmuter pool entirely in the event of an emergency or to retire unused pools. This will freeze the contents of the pool as no messages can be run apart from enabling the Active Status again. This delegation allows either the wider Osmosis DAO or a large subDAO the ability to handle Metadata and Limiter settings, whilst retaining rapid response by a smaller subDAO in an emergency. 

**Set Alloyed Metadata** 
This allows the on-chain metadata for how the Alloyed Asset is displayed to be adjusted, for example the displayed denom, description and ticker. 

**Manage Limiters** 
This allows the limiters above to be created, removed or modified. These must be set appropriately for normal trading to not be impacted whilst minimising the impact of a security issue in any of the constituent assets. 
## Contract information 
Release: V2.0.0 
Compiler Version: cosmwasm/workspace-optimizer:0.14.0 
Checksum: 566915d3980c3dc84ac8134b04e8484875c278359be1b1d376e99ee4ea59bbc1 
Code repository: [https://github.com/osmosis-labs/transmuter](https://github.com/osmosis-labs/transmuter) 
Commit ID: a4cfd53c105bfbd7e52d63b93337932431023a0b 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-transmuter-v2-contract-alloyed-assets/437](https://forum.osmosis.zone/t/upload-transmuter-v2-contract-alloyed-assets/437)
</details>
