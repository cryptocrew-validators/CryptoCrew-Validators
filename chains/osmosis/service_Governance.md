## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 598 | 💎 ATOM Airdrop ✅ | Sat Aug 26 2023 23:56:55 UTC | ABSTAIN |
| 599 | IBC Client Update: Expired Client to Starname Chain | Wed Aug 30 2023 16:35:53 UTC | ⏳ NOT VOTED |
| 600 | Upload Transmuter Contract v1 | Mon Aug 28 2023 15:27:28 UTC | ⏳ NOT VOTED |
| 601 | Osmosis Support Lab Funding Round September 2023 - March 2024 | Tue Aug 29 2023 20:53:42 UTC | ⏳ NOT VOTED |
| 604 | Upload WBTC Contract | Wed Aug 30 2023 14:41:35 UTC | ⏳ NOT VOTED |
| 605 | Signaling Proposal: Remove Unverified Status from Gelotto (GLTO) Token | Wed Aug 30 2023 15:42:34 UTC | ⏳ NOT VOTED |
| 606 | Osmosis v19 Software Upgrade | Thu Aug 31 2023 11:40:09 UTC | ⏳ NOT VOTED |

---

### 🗳 598: 💎 ATOM Airdrop ✅
- Voting Start: Sat Aug 26 2023 23:56:55 UTC
- Voting End: Thu Aug 31 2023 23:56:55 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

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
