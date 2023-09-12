## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 620 | Upload Alpine Pay Core contract | Wed Sep 13 2023 03:11:34 UTC | ⏳ NOT VOTED |
| 621 | Enable superfluid staking on newly created OSMO/USDC, OSMO/ETH, and OSMO/ATOM supercharged liquidity pools | Wed Sep 13 2023 21:52:51 UTC | ✅ YES |
| 622 | Create Supercharged Pools: USDT pairing equivalents | Sun Sep 17 2023 09:18:24 UTC | ⏳ NOT VOTED |

---

### 🗳 620: Upload Alpine Pay Core contract
- Voting Start: Fri Sep 08 2023 03:11:34 UTC
- Voting End: Wed Sep 13 2023 03:11:34 UTC

<details>
<summary>Proposal Text</summary>
 
##Details:nThe Alpine DApp is a web application payment platform built on the Osmosis blockchain; designed to facilitate tipping of content creators using Osmosis tokens, users can now show their appreciation by making secure donations while including personalized messages to any social media user or content creator they wish to support.nnThe Alpine smart contract enables the core functionality of the DApp. It facilitates the creation and processing of tips, ensuring the secure transfer of Osmosis tokens from the sender to the content creator’s wallet address. Additionally, it enables the inclusion of personalized messages, allowing users to express their sentiments to the content creators.nnAdditionally, the Alpine web app builds upon the Alpine smart contract by making the concept fun, simple, and visually pleasing. User experience is improved by providing a Kado widget so that users who are unfamiliar with the Cosmos ecosystem can easily purchase crypto with fiat currency and send it to their favorite content creator without hassle. We also provide integrations for popular social media applications such as Twitter, Instagram, and GitHub so that users can easily identify their favorite streamer in our application.nnTo maintain control and governance, the Alpine smart contract will be owned by the Alpine Team. Integration with the Osmosis blockchain is crucial for the Alpine DApp’s seamless functioning.nnn##Contract information (Alpine Pay):nThe git commit Id - 877fbf2fc3a404e3487eac707a7061c7f0bb7d5fnnThe code can be found at - GitHub - temple-0/alpine-pay-corennCompiler Version - cosmwasm/rust-optimizer:0.12.11nnChecksum - 462b55aa0132d962fc185bdbb65f736e4119c8914840239d9a55ecddeb38b5d8 alpine_pay.wasmnnUploader Address - osmo1zw5337y7a7ajj2jz4t0teyzcy5dup5k8wjz88ann##Link to Forum Post:nhttps://forum.osmosis.zone/t/upload-alpine-pay-contract/258
</details>

---

### 🗳 621: Enable superfluid staking on newly created OSMO/USDC, OSMO/ETH, and OSMO/ATOM supercharged liquidity pools
- Voting Start: Fri Sep 08 2023 21:52:51 UTC
- Voting End: Wed Sep 13 2023 21:52:51 UTC

<details>
<summary>Proposal Text</summary>
 
On passing, this proposal would enable superfluid staking on the newly linked OSMO/USDC (#1133), OSMO/ETH (#1134), and OSMO/ATOM (#1135) supercharged liquidity pools on Osmosis. This will also allow for superfluid staked positions in the traditional GAMM pools to migrate to the linked supercharged liquidity pools
</details>

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
