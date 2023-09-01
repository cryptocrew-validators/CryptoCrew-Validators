## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 599 | IBC Client Update: Expired Client to Starname Chain | Wed Aug 30 2023 16:35:53 UTC | ⏳ NOT VOTED |
| 600 | Upload Transmuter Contract v1 | Mon Aug 28 2023 15:27:28 UTC | ✅ YES |
| 601 | Osmosis Support Lab Funding Round September 2023 - March 2024 | Tue Aug 29 2023 20:53:42 UTC | ⏳ NOT VOTED |
| 604 | Upload WBTC Contract | Wed Aug 30 2023 14:41:35 UTC | ⏳ NOT VOTED |
| 605 | Signaling Proposal: Remove Unverified Status from Gelotto (GLTO) Token | Wed Aug 30 2023 15:42:34 UTC | ⏳ NOT VOTED |
| 606 | Osmosis v19 Software Upgrade | Thu Aug 31 2023 11:40:09 UTC | ⏳ NOT VOTED |
| 607 | Upload Stride Redemption Rate Oracle Contract | Thu Aug 31 2023 20:05:55 UTC | ⏳ NOT VOTED |
| 608 | Upload stToken Scaling Factor Auto-update Contract | Thu Aug 31 2023 20:10:26 UTC | ⏳ NOT VOTED |
| 609 | HUAHUA Recovery from wrong pools | Fri Sep 01 2023 12:04:49 UTC | ⏳ NOT VOTED |

---

### 🗳 599: IBC Client Update: Expired Client to Starname Chain
- Voting Start: Wed Aug 30 2023 16:35:53 UTC
- Voting End: Mon Sep 04 2023 16:35:53 UTC

<details>
<summary>Proposal Text</summary>
 
Due to an unforeseen relayer issue that resulted in the subject client exceeding the trusting period, the IBC client 07-tendermint-71 used by channel-15 for IOV transfers from Starname to Osmosis is currently in an expired state. If accepted, this proposal will update client 07-tendermint-71 with the data from 07-tendermint-2952 which is created newly, so that users may continue to take advantage of both the established channel.
</details>

---

### 🗳 600: Upload Transmuter Contract v1
- Voting Start: Mon Aug 28 2023 15:27:28 UTC
- Voting End: Sat Sep 02 2023 15:27:28 UTC

<details>
<summary>Proposal Text</summary>
 
Transmuter is a CosmWasm contract that allows 1:1 conversion of one asset to another. 

Transmuter would be the first CosmWasm Pool to be uploaded to Osmosis, a pool type fully integrated with Osmosis’ existing pools but created via the instantiation of a CosmWasm contract, allowing deployment of new pool types without software upgrades. 
## Details
Once instantiated with two assets, the contract functions as a pool with a fixed 1:1 ratio of token value, no matter the ratio of the assets in the pool. 

[Classic curve (Red), Stableswap (Blue) and Transmuter (Green)](https://imgur.com/ZvvBErC) 

For traders, this enables the Transmute function which allows the exchange of 1 unit of value of a token they possess that is in the pool with 1 unit of value of any other token that is present in the pool without any slippage. 

For liquidity providers, one token can be added to the pool in exchange for a representative token of that value held within the pool. Owners of the representative tokens can choose which asset to withdraw from the pool. 

As there is zero slippage or fee, liquidity providers must either be altruistic or obtain an alternative benefit for adding tokens to the pool. 

## Potential Uses 
V1 of the Transmuter may be used to convert freely between identical tokens of different origins, such as axlUSDC and native USDC, to aid migration. As there is no benefit for liquidity providers to maintain a usable ratio of tokens, this would likely only be in use over a token’s transition period rather than a stableswap pool with a small swap fee. 

## Contract information

**Release**: V1.0.0

**Compiler Version**: cosmwasm/workspace-optimizer:0.14.0

**Checksum**: 6a1407229263b3321aedc359758018f26e18faff6a2feecc11a9acb118ccdd3d

**Code repository**: [https://github.com/osmosis-labs/transmuter](https://github.com/osmosis-labs/transmuter)

**Commit ID**: 1d7e32d3f3e83db5ecb3b3f7b8b8961a6787d515

**Forum Thread**: [https://forum.osmosis.zone/t/upload-transmuter-contract-v1/133](https://forum.osmosis.zone/t/upload-transmuter-contract-v1/133)
</details>

---

### 🗳 601: Osmosis Support Lab Funding Round September 2023 - March 2024
- Voting Start: Tue Aug 29 2023 20:53:42 UTC
- Voting End: Sun Sep 03 2023 20:53:42 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal will fund the Osmosis Support Lab for the period of September 2023 through March 2024.nnThe full proposal and discussion can be found here: https://forum.osmosis.zone/t/revised-osmosis-support-lab-funding-round-september-2023-march-2024/255
</details>

---

### 🗳 604: Upload WBTC Contract
- Voting Start: Wed Aug 30 2023 14:41:35 UTC
- Voting End: Mon Sep 04 2023 14:41:35 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload the WBTC CosmWasm contract to the Osmosis chain and recognize WBTC minted through this contract as the Canonical version of WBTC on Osmosis as the most native version. 
## Details
WBTC brings Bitcoin liquidity to Defi by providing a token usable in smart contracts, backed 1:1 with Bitcoin verifiably held by a community of Custodians. 

As an ERC-20 token on Ethereum, WBTC has allowed Bitcoin liquidity to be used across DeFi use cases rather than being restricted to trading on Centralised Exchanges. 

This contract enables the WBTC issuance and redemption process as a native token on Osmosis. 

Website: [https://wbtc.network/](https://wbtc.network/)
## Contract Details
The WBTC contract allows the issuance and redemption of WBTC according to Bitcoin present in the custodian’s wallet on the Bitcoin blockchain at the request of merchants. 

Merchants perform key roles for the WBTC community as administrators who initiate the process of minting newly wrapped tokens and burning wrapped tokens which is performed by the Custodians. 

The custodian provides reliable, institutional-grade security for your WBTC. All WBTC issued will be fully backed and verified through on-chain proof of reserves. 

The addition and removal of merchants and custodians for WBTC on Osmosis will be an open process controlled by a multi-signature contract. Keys to the multi-sig contract will be held by institutions as part of the [WBTC DAO](https://osmosis.daodao.zone/dao/osmo1ltlaul7tfvm92jj3spsfl2hj2926zr325jzt5c6mx4f3r5a872js8ax5af/proposals) 

Oak Security has audited the contract, which can be viewed here: [https://github.com/oak-security/audit-reports/blob/master/Osmosis%20Labs/2023-08-18%20Audit%20Report%20-%20CosmWasm%20WBTC%20v1.0.pdf](https://github.com/oak-security/audit-reports/blob/master/Osmosis%20Labs/2023-08-18%20Audit%20Report%20-%20CosmWasm%20WBTC%20v1.0.pdf)

## Contract Information
**Release Version**: [V1.0.0](https://github.com/osmosis-labs/cw-wbtc/releases/tag/v1.0.0)

**Git Commit ID**:876f865e0b06e519384808efe84ee906d8746c05

**Code Location**: [https://github.com/osmosis-labs/cw-wbtc](https://github.com/osmosis-labs/cw-wbtc)

**Compiler Version**: cosmwasm/workspace-optimizer:0.14.0

**Checksum**: f6dccc84a35b3ddc8b289ca45564eee15b3c76d1eeb8807ab2763dd83787a9fe

## Canonical Status
As part of this proposal, Osmosis recognizes the WBTC minted via this contract as the canonical version of WBTC on Osmosis. 

Canonical status sets the following agreement: 

**Default Asset List**
Assets will be unprefixed in the app.osmosis.zone default asset list, e.g. WBTC with all other bridges’ assets being bridge1WBTC, bridge2WBTC, etc. Osmosis DAO requests that allied/friendly front-ends do the same, though any front-end is free to make its own decisions. 

**Osmosis Incentives**
The DAO commits to prioritizing the Canonical Bridge assets, incentivizing them earlier and more heavily than the comparable assets of non-canonical bridges. In general, canonical pools should earn substantially more incentives per dollar of liquidity than their counterpart pools–under the base incentives model, not necessarily counting external incentive matching. 

This proposal does not directly impact the incentives currently provided to the axlWBTC/OSMO pool (712), which will be reallocated in a future proposal. 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-cosmwasm-wbtc-contract/246](https://forum.osmosis.zone/t/upload-cosmwasm-wbtc-contract/246)
</details>

---

### 🗳 605: Signaling Proposal: Remove Unverified Status from Gelotto (GLTO) Token
- Voting Start: Wed Aug 30 2023 15:42:34 UTC
- Voting End: Mon Sep 04 2023 15:42:34 UTC

<details>
<summary>Proposal Text</summary>
 
The Gelotto (GLTO) token was launched in June of 2022 and has been actively traded on Osmosis. However, the unverified status given by Osmosis creates an unwanted perception towards the asset, deterring new users and causing additional steps for existing users. This proposal aims to remove the unverified status of GLTO. More details can be found on the forum discussion: https://forum.osmosis.zone/t/signaling-proposal-remove-unverified-status-from-gelotto-glto-token/236
</details>

---

### 🗳 606: Osmosis v19 Software Upgrade
- Voting Start: Thu Aug 31 2023 11:40:09 UTC
- Voting End: Tue Sep 05 2023 11:40:09 UTC

<details>
<summary>Proposal Text</summary>
 
This is a proposal to do a software upgrade to the v19.0.0 software tag of the Osmosis codebase on block height **11317300**, which is estimated to occur on **Tuesday September 5th, UTC 16:00**. Block times have high variance, so please monitor the chain for more precise time estimates. 
## Upgrade Features
This upgrade adds the following features: 

**Taker Fee Implementation**
Parameters to enable a Taker fee on Osmosis have been added. 
* The initial global taker fee parameter is set to 0 and will need to be activated by governance. 
* Distribution parameters have been set according to [Proposal 530](https://www.mintscan.io/osmosis/proposals/530) and [Proposal 549](https://www.mintscan.io/osmosis/proposals/549)
* Stakers initially receive: 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh 100% of OSMO value collected. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh 67% of Non-OSMO value collected which is swapped to OSMO before distribution, similar to the mechanism by which Transaction fees in non-OSMO assets are distributed. 
* The Community pool receives: 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh 33% of Non-OSMO value collected. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Takes the form of the Quote asset involved in the transaction. 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Transactions not involving a Quote asset will swap to a governance adjustable asset, initially USDC, before being sent to the community pool. 
* This is an adjustment to the value distribution method mentioned in [Proposal 530](https://www.mintscan.io/osmosis/proposals/530) due to issues with gas usage when claiming a wide variety of tokens discovered during implementation and a change to the expected mechanism of taker fee implementation when using pools with Quote assets. 
* Acceptance of this proposal approves the software upgrade using this modified implementation. Further information is detailed [here](https://forum.osmosis.zone/t/temperature-check-modification-of-taker-fee-distribution-for-non-osmo-assets/276). 
* Taker fee rates for specific denom pairings can be adjusted via governance or by a whitelisted address parameter which is initially not set. 

**Superfluid Staking Fix**
Voting power for Superfluid stake was removed during the expedited v18 software upgrade. 
This software upgrade restores all voting power provided to validators through Superfluid Stake. 

See the [Full Change Log](https://github.com/osmosis-labs/osmosis/blob/main/CHANGELOG.md) for more API Breaking, State Breaking and other miscellaneous changes. 

## Getting Prepared for the Upgrade 
To build the binary, be sure to install golang 1.20. 

As always, we recommend validators utilize 64GB of RAM. Since state migration is relatively negligible in this upgrade, it is possible to get away with less, but still not recommended. If you are unable to have 64GB of RAM, at a minimum have a total of 64GB of swap set to prevent out of memory errors. 

If using Cosmovisor, manually build & copy the osmosisd binary to /cosmovisor/upgrades/v19/bin/. 

If not using Cosmovisor, wait for your node to halt at the upgrade height, then install and run the v19.0.0 binary. 

## Details of Upgrade Time
The proposal targets the upgrade proposal block to be **11317300**, anticipated to be on **Tuesday September 5th, UTC 16:00**. Note that block times have high variance, so keep monitoring the time. See countdown [here](https://www.mintscan.io/osmosis/blocks/11317300). 

The upgrade is anticipated to take approx 30 minutes, during which time, there will not be any on-chain activity on the network. 

In the event of an issue at upgrade time, we should coordinate via the validators channel in Discord to come to a quick emergency consensus and mitigate any further issues.
</details>

---

### 🗳 607: Upload Stride Redemption Rate Oracle Contract
- Voting Start: Thu Aug 31 2023 20:05:55 UTC
- Voting End: Tue Sep 05 2023 20:05:55 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload the Stride Redemption Rate Oracle Contract to the Osmosis chain 

 ## Summary 

 The Stride Redemption Rate Oracle Contract uses an interchain account (ICA) to provide the redemption rates of Stride's stTokens to the Osmosis blockchain in a decentralized manner. 

 If uploaded to Osmosis, the Oracle Contract's feeds could be used to 1) trustlessly handle the scaling factor for stToken stableswap pools, and 2) could be integrated with Mars' oracle implementation to provide a more dependable oracle price for stTokens. 

 ## Details 

 stTokens represent underlying staked tokens, which are controlled by the Stride blockchain. At any time, a user may use his stToken to redeem a certain amount of its underlying token. The amount of underlying tokens a single stToken can redeem is called the redemption rate. For example, on the Stride blockchain 1 stATOM can currently be used to redeem 1.205 ATOM. To continue with the example, the market price of stATOM vs ATOM may fluctuate - but the true stATOM vs ATOM value is the redemption rate. 

 The Oracle Contract uses an ICA to provide redemption rates for Stride's stTokens to the Osmosis blockchain in a decentralized manner. As mentioned above, stToken redemption rates on Osmosis can be used to trustlessly manage the scaling factors for stToken stableswap pools and to strengthen stToken price oracles on Osmosis. 

 ## Contract information 

 **Release**: [v1.0.0](https://github.com/Stride-Labs/ica-oracle/releases/tag/v1.0.0) 

 **Git Commit**: `2fdf76f3ba4fad6a20a6d10d77c0511f2439b6c3` 

 **Code Repository**: [https://github.com/Stride-Labs/ica-oracle](https://github.com/Stride-Labs/ica-oracle) 

 **Compiler**: `cosmwasm/rust-optimizer:0.14.0` 

 **Checksum**: `5ee10302357ff0f8531fe00029cd35cfe5a2c521c6a818cee06cd61a3df0cb42` 

 **Forum Thread**: [https://forum.osmosis.zone/t/upload-stride-redemption-rate-oracle-contract/248](https://forum.osmosis.zone/t/upload-stride-redemption-rate-oracle-contract/248) 
</details>

---

### 🗳 608: Upload stToken Scaling Factor Auto-update Contract
- Voting Start: Thu Aug 31 2023 20:10:26 UTC
- Voting End: Tue Sep 05 2023 20:10:26 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload the stToken Scaling Factor Auto-update Contract to the Osmosis chain 

 ## Summary 

 The stToken Scaling Factor Auto-update Contract makes use of the Stride Redemption Rate Oracle Contract to automatically update the scaling factor for stToken stableswap pools, such as the stOSMO-OSMO pool. 

 Currently, the scaling factor for stToken stableswap pools is updated every several days using a multisig address controlled by the Stride Association. By using the Auto-update Contract the Stride Association can relinquish this responsibility, which would thereafter be carried out in an automatic and fully trustless manner. 

 ## Details 

 Normal stableswap pools concentrate the two tokens at a 1:1 ratio, which is ideal for USD stablecoins. But Osmosis stableswap pools have an optional scaling factor, which enables the concentration ratio to be continually scaled. This scaling factor is utilized for stToken stableswap pools, because stTokens constantly appreciate in value against their underlying tokens. 

 Currently, it is the responsibility of a Stride Association multisig address to gradually increase the concentration ratios on several stToken stableswap pools. But that process can now be automated. 

 For example, the stOSMO:OSMO redemption rate is currently 1:1.148. Soon, the Stride Redemption Rate Oracle Contract could feed this redemption rate to Osmosis. Then the stToken Scaling Factor Auto-update Contract would take the stOSMO redemption rate and use it to adjust the scaling factor / concentration ratio on the stOSMO/OSMO stableswap pool. 

 Note that once these two contracts are uploaded, a further governance proposal would be required for the Stride Association multisig to relinquish control of stToken pool scaling factors to the Auto-update Contract. 

 ## Contract information 

 **Release**: [v1.0.0](https://github.com/Stride-Labs/st-scaling-factor/releases/tag/v1.0.0) 

 **Git Commit**: `7e75ff9e92755a4ad284a8f07b332f4d5b444062` 

 **Code repository**: [https://github.com/Stride-Labs/st-scaling-factor](https://github.com/Stride-Labs/st-scaling-factor) 

 **Compiler**: `cosmwasm/rust-optimizer:0.12.13` 

 **Checksum**: `57f5ec7f8e2848d53e8164c80272cdff311cc844c70d0b15b71712cbc2ec034c` 

 **Forum Thread**: [https://forum.osmosis.zone/t/upload-sttoken-scaling-factor-auto-update-contract/249](https://forum.osmosis.zone/t/upload-sttoken-scaling-factor-auto-update-contract/249) 
</details>

---

### 🗳 609: HUAHUA Recovery from wrong pools
- Voting Start: Fri Sep 01 2023 12:04:49 UTC
- Voting End: Wed Sep 06 2023 12:04:49 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal seeks a Governance approval to merge the code needed to recover 6B HUAHUA stuck into wrong pools into the osmosis codebase.
Here you can find a [detailed description of the incident](https://commonwealth.im/osmosis/discussion/6497-recovering-huahua-wrong-external-incentives)
And here you can find the [forum thread](https://forum.osmosis.zone/t/save-6bn-huahua-from-locked-pool/238 with the resolution proposal.)

- Vote YES if you want to allow Chihuahua to recover the 6B HUAHUA
- Vote NO if you don't want to allow Chihuahua to recover the 6B HUAHUA
</details>
