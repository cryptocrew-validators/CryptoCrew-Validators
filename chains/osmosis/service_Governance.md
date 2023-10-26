## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 663 | 💎ATOM Airdrop ✅ - New version ⭐️ | Sat Oct 28 2023 16:58:30 UTC | ABSTAIN |
| 664 | Upload Ojo Oracle Contract Wasm Code | Sun Oct 29 2023 16:09:34 UTC | ✅ YES |
| 665 | Celestia Incentive Spend | Sun Oct 29 2023 12:57:06 UTC | 🤷‍♂️ ABSTAIN |
| 667 | 💎Celestia & ATOM Airdrop ✅ - Try New Feature! | Mon Oct 30 2023 23:59:13 UTC | ⏳ NOT VOTED |
| 668 | Update stOSMO/OSMO Scaling Factor Controller to Auto Update Contract | Tue Oct 31 2023 21:15:40 UTC | ⏳ NOT VOTED |

---

### 🗳 663: 💎ATOM Airdrop ✅ - New version ⭐️
- Voting Start: Mon Oct 23 2023 16:58:30 UTC
- Voting End: Sat Oct 28 2023 16:58:30 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 664: Upload Ojo Oracle Contract Wasm Code
- Voting Start: Tue Oct 24 2023 16:09:34 UTC
- Voting End: Sun Oct 29 2023 16:09:34 UTC

<details>
<summary>Proposal Text</summary>
 
## Upload Ojo Oracle Contract Wasm Code

### Summary

This proposal intends to upload the Ojo Oracle Contract for use by Levana on Osmosis.

The Levana team has agreed to use the Ojo Oracle in order to determine the price of assets for their deployment on Osmosis.

### About Ojo

Ojo uses a push-model price oracle contract which broadcasts regular price updates. Ojo is able to support a unique class of assets that are native to DEXes like Osmosis, Crescent, and Kujira's FIN. As a result, Ojo is the only oracle which provides pricing info on all of Stride's LSTs and other native tokens to the Cosmos. This also includes our Smart Oracle offering, which provides contextual market data about low-volume assets so that they can engage in DeFi safely.

Ojo has already been deployed to these Cosmos L1s: Stargaze, Juno, Comdex, Umee, Secret Network, and Archway.

### About Levana

Levana Perps is a protocol for perpetual swaps, which are leveraged trading contracts. It aims to manage risk and provide benefits to both traders and liquidity providers. Levana's perpetual swaps protocol offers a reliable and secure platform for traders and liquidity providers. It ensures fair settlement, minimizes risks, and allows for the development of additional financial protocols on top of tokenized positions.

### Contract Information

Release Version: sdk47-v1.7.0

Code Url : https://github.com/ojo-network/contracts/releases/tag/sdk47-v1.7.0

Compiler Version : cosmwasm/workspace-optimizer:0.12.7

Checksum : 560673bbd71f1bf10326048292313e9c9c0e29cc4f45b2377a4faee1f72c5107


### References
- [Ojo Network docs](https://docs.ojo.network/integrate)
- [Ojo GitHub](https://github.com/ojo-network)
- [Ojo Whitepaper](https://github.com/ojo-network/ojo/blob/main/whitepaper.pdf)
- [Ojo Audit](https://github.com/runtimeverification/publications/blob/main/reports/smart-contracts/Ojo.pdf)
- [Ojo Docs](https://docs.ojo.network)
</details>

---

### 🗳 665: Celestia Incentive Spend
- Voting Start: Tue Oct 24 2023 12:57:06 UTC
- Voting End: Sun Oct 29 2023 12:57:06 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal requests a bootstrapping incentive spend for the launch of Celestia (TIA) token liquidity on Osmosis.nn## About CelestiannCelestia is a new type of blockchain that aims to launch a new modular paradigm where each chain is minimal in composition and highly specialized to perform specific tasks. This specialization provides breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain applications for mass adoption.nnCelestia is specialized as a data availability blockchain with the TIA token used to pay for blobspace. This allows new blockchains to be spun up without their own native token, instead using TIA similarly to ETH on Ethereum-based rollups. Developers may opt to bootstrap their chain quickly by using TIA as a gas token and currency, in addition to paying for data availability. In this mode, developers can focus on creating their application or execution layer instead of issuing a token right away.nn## Incentive spendnnThis proposal requests a community pool spend to incentivize liquidity on Osmosis for the TIA at the launch of the Celestia chain.nnThis pool will have a 0.05% spread factor Supercharged pool paired with USDC.nnAs of [Proposal 638](https://www.mintscan.io/osmosis/proposals/638), Osmosis no longer allocates ongoing internal incentives to most pools.nnBy spending specific quantities of incentives with a fixed end date, initial liquidity can be crowdsourced for a pool to launch new markets on Osmosis. After the market has been established, these external incentives will end, and the market will reach a sustained level of liquidity through trading fees alone.nn## Why is TIA liquidity important to Osmosis?nnThe modular blockchain paradigm is an extension of the appchain thesis, with each blockchain focusing on its own specialty. As a modular blockchain focussed on data availability, Celestia is deliberately unable to run a native exchange, and so the dominant decentralized exchange for TIA must be run on another chain.nnOsmosis should not only be aiming to be the decentralized exchange of choice for TIA, but also be the connector between all IBC chains, such as Celestia, and all other modular blockchains and rollups that will use the Hyperlane bridge. Building TIA liquidity is the first step towards Osmosis becoming the crossroads of liquidity trading for the emerging modular blockchain ecosystem.nnSee this talk at this year’s Modular conference for more information on Osmosis and Celestia: https://www.youtube.com/watch?v=9DVwjwYvPsknn## Requested SpendnnThis proposal requests that a 300,000 OSMO budget be granted to incentivize liquidity of the TIA token with the following restrictions.nnThe incentives program will start when TIA is listed on Osmosis and freely available to trade.nnThe incentives program will last no more than 50 days to give sufficient time for the liquidity market to establish.nnThe quantity of OSMO has been chosen as a spend equivalent to fifteen days of the redirected incentives removed in [Proposal 638](https://www.mintscan.io/osmosis/proposals/638).nnNew Proof of Stake networks can have issues attracting staking security as well as trading liquidity. Some tokenomic designs have a high level of inflation in order to attract community stakers, but the [initial inflation of the Celestia chain is 8%](https://docs.celestia.org/learn/staking-governance-supply/#inflation), and all tokens, including vested, may be staked. This is comparable to the standard across the Cosmos and should result in an expected staking return of 12%-16% at typical bonding levels for proof of stake chains.nnAll incentives may not be spent as they will be loaded according to the following methodology:nn* Minimum spend of 3000 OSMO per day (150,000 over the period)nn* Maximum spend of 6000 OSMO per day (300,000 over the period)n* Week 1 incentives to be loaded as the maximumn* Week 2 onwards then revise within these restrictions as per the formula:nnValue per day = Celestia Staking rate per day README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Pool TVL README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh 3nnThis allows Celestia liquidity on Osmosis to be a highly attractive venue for using the token as the pool grows whilst being tempered by both the quantity of Celestia staked and in the event that the pool does not attract the intended liquidity.nn## Funding managementnnThis proposal spends the requested OSMO into a multisig on DAODAO to be loaded to the specified pool by the members according to the above criteria.nnMembers of the [multisig](https://osmosis.daodao.zone/dao/osmo1g6dsaslf2gyzf6yexgmefsf4c4kc7ddu0jh3jtpg4a7x9xxy6z9qttelz7/proposals) are:nn* CryptoCrew (Validator)n* John Galt (Stride Contributor)n* Johnny Wyles (Osmosis Labs)
</details>

---

### 🗳 667: 💎Celestia & ATOM Airdrop ✅ - Try New Feature!
- Voting Start: Wed Oct 25 2023 23:59:13 UTC
- Voting End: Mon Oct 30 2023 23:59:13 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 668: Update stOSMO/OSMO Scaling Factor Controller to Auto Update Contract
- Voting Start: Thu Oct 26 2023 21:15:40 UTC
- Voting End: Tue Oct 31 2023 21:15:40 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will change the scaling factor controller address of pool 833 (stOSMO/OSMO) from `osmo1k8c2m5cn322akk5wy8lpt87dd2f4yh9afcd7af` to `osmo12yvjuy69ynnts95ensss4q6480wkvkpnq2z2ntxmfa2qp860xsmq9mzlpn`. 

 ## Summary 

 The stToken Scaling Factor Auto-update Contract makes use of the Stride Redemption Rate Oracle Contract to automatically update the scaling factor for stToken stableswap pools, such as the stOSMO-OSMO pool. 

 Currently, the scaling factor for stToken stableswap pools is updated every several days using a multisig address controlled by the Stride Association. By using the Auto-update Contract the Stride Association can relinquish this responsibility, which would thereafter be carried out in an automatic and fully trustless manner. 

 This proposal changes the scaling factor controller address of the stOSMO/OSMO pool from a multisig (`osmo1k8c2m5cn322akk5wy8lpt87dd2f4yh9afcd7af`) to the contract address of the Auto-update contract (`osmo12yvjuy69ynnts95ensss4q6480wkvkpnq2z2ntxmfa2qp860xsmq9mzlpn`). 

 ## Details 

 Normal stableswap pools concentrate the two tokens at a 1:1 ratio, which is ideal for USD stablecoins. But Osmosis stableswap pools have an optional scaling factor, which enables the concentration ratio to be continually scaled. This scaling factor is utilized for stToken stableswap pools, because stTokens constantly appreciate in value against their underlying tokens. 

 Currently, it is the responsibility of a Stride Association multisig address to gradually increase the concentration ratios on the stOSMO/OSMO pool. But that process can now be automated. 

 For example, the stOSMO:OSMO redemption rate is currently 1:1.1638. The Stride Redemption Rate Oracle Contract feeds this redemption rate to Osmosis. The stToken Scaling Factor Auto-update Contract can then take the stOSMO redemption rate and use it to adjust the scaling factor / concentration ratio on the stOSMO/OSMO stableswap pool. In order to update this ratio, the pool’s controller address must be updated to the contract address. 

 The admin of the auto-update scaling factor contract is the same Stride Association controlled multisig that presently controls the pool’s scaling factor (`osmo1k8c2m5cn322akk5wy8lpt87dd2f4yh9afcd7af`). As a transitionary measure, the admin of the contract has permission to bypass the oracle and update the scaling factor of the pool directly. However, after the oracle and auto-update contract has proven successful, this privilege will be removed from the contract such that the scaling factor can only be updated to values that are inline with the oracle. 

 **Forum Thead:** [#451 - Change stOSOM Scaling Factor Controller Address to Scaling Factor AutoUpdate Contract](https://forum.osmosis.zone/t/change-stosmo-osmo-scaling-factor-controller-address-to-sttoken-scaling-factor-auto-update-contract/451) 

 **Related Forum Posts:** 

 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh [#248 - Upload Stride Redemption Rate Oracle Contract](https://forum.osmosis.zone/t/upload-stride-redemption-rate-oracle-contract/248) 

 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh [#249 - Upload StToken Scaling Factor Auto Update Contract](https://forum.osmosis.zone/t/upload-sttoken-scaling-factor-auto-update-contract/249) 
</details>
