## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 659 | Upload Transmuter v2 - Alloyed Assets | Tue Oct 24 2023 09:14:03 UTC | ✅ YES |
| 660 | DYDX Incentive Spend | Wed Oct 25 2023 13:59:41 UTC | 🤷‍♂️ ABSTAIN |
| 661 | 🧪 New OSMO version - 48 Hours Left! 🧪 | Thu Oct 26 2023 00:07:38 UTC | ABSTAIN |
| 662 | 💎Celestia Airdrop on Osmosis✅ - 48 hours left! | Thu Oct 26 2023 21:55:23 UTC | ABSTAIN |

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

---

### 🗳 660: DYDX Incentive Spend
- Voting Start: Fri Oct 20 2023 13:59:41 UTC
- Voting End: Wed Oct 25 2023 13:59:41 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal requests a bootstrapping incentive spend for the launch of dYdX token liquidity on Osmosis.nn## About dYdXnndYdX is an established perpetuals exchange running v3 of the [open-source dYdX software](https://github.com/dydxprotocol/) at [dydx.exchange](https://dydx.exchange/).nndYdX [voted](https://snapshot.org/#/dydxgov.eth/proposal/0x17026e18317dc29fe745d3130246a83b1485612da9c97e7261e8f659cf33663c) to migrate to a new, IBC-enabled appchain running the v4 dYdX software earlier this year. This includes the launch of a staking token to govern voting power on the dYdX chain.nnThe current dYdX token on Ethereum, now known as ethDYDX, can be locked in a smart contract in return for both a corresponding DYDX token on the new chain governing v4 of the software as well a wethDYDX token on Ethereum, which will continue to govern v3 of the software.nn## Incentive spendnnThis proposal requests a community pool spend to incentivize liquidity on Osmosis for the DYDX token from the dYdX chain.nnThe pool will be 0.05% spread factor Supercharged pool paired with USDC.nnAs of [Proposal 638](https://www.mintscan.io/osmosis/proposals/638), Osmosis no longer allocates ongoing internal incentives to most pools.nnBy spending specific quantities of incentives with a fixed end date, initial liquidity can be crowdsourced for a pool to launch new markets on Osmosis. After the market has been established, these external incentives will end, and the market will reach a sustained level of liquidity through trading fees alone.nn## Why is dYdX liquidity important to Osmosis?nnAs an established project on Ethereum, dYdX currently has around [4,000 active traders](https://dydx.metabaseapp.com/public/dashboard/b3e36e1f-6860-4ecb-8f8b-96ca727f4609) despite current market conditions. Osmosis becoming the main place to trade the governance token may attract new users who were typically Ethereum natives but have recently installed Cosmos-compatible wallets to interact with the new version of dYdX.nnAs the liquidity hub for the Cosmos, Osmosis will form the primary spot market for dYdX’s perpetual markets. Increased activity and adoption of dYdX v4 over v3, therefore, will attract further volume to Osmosis, and so it is in Osmosis’ interests to incentivize migration by enabling an active dYdX market.nndYdX is also the first prominent app to choose to migrate to a dedicated appchain, demonstrating Cosmos’ vision of a multi-chain future connected by IBC. Supporting established apps to move to an appchain grows the usage of the Cosmos as a whole. Osmosis can assist here by increasing liquidity depth outside the original monolithic chain during launches.nn## Requested SpendnnThis proposal requests 200,050 OSMO to be spent as follows:nn* 200,000 OSMO to the DYDX / USDC pool over 50 days to source liquidity for DYDX in the Cosmos. (Approx $1000 per day)n* 50 OSMO for the gauge creation fee.nnFifty days should give sufficient time for the liquidity market to establish. The recent USDT launch took around 30 days for incentives to develop [reliable volume](https://info.osmosis.zone/token/USDT), so incentives should be around longer than this to ensure the market is well established.nnThe quantity of OSMO has been chosen as a spend equivalent to ten days of the redirected incentives removed in [Proposal 638](https://www.mintscan.io/osmosis/proposals/638). This aims to ensure that the incentives are substantial to attract liquidity primarily to Osmosis while not raising inflation significantly compared to that proposal’s reduction.nn## Funding managementnnThis proposal spends the requested OSMO into a multisig on DAODAO to be loaded to the specified pool by the members.nnAll incentives will be loaded to the relevant gauge as soon as the pool is freely available for trading on Osmosis.nnMembers of the multisig are:nn* Chorus One (DYDX and Osmosis Validator)n* Johnny Wyles (Osmosis Labs)n* RoboMcGobo (Osmosis Community and DYDX Grants Program)nnForum Post: [https://forum.osmosis.zone/t/dydx-incentive-spend/445](https://forum.osmosis.zone/t/dydx-incentive-spend/445)
</details>

---

### 🗳 661: 🧪 New OSMO version - 48 Hours Left! 🧪
- Voting Start: Sat Oct 21 2023 00:07:38 UTC
- Voting End: Thu Oct 26 2023 00:07:38 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 662: 💎Celestia Airdrop on Osmosis✅ - 48 hours left!
- Voting Start: Sat Oct 21 2023 21:55:23 UTC
- Voting End: Thu Oct 26 2023 21:55:23 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>
