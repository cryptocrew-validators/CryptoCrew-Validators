## Active Proposals `stargaze-1`

| PROPOSAL_ID | PROPOSAL_TITLE | VOTING_START_TIME | VOTING_END_TIME | VOTE |
|-------------|----------------|-------------------|-----------------|------|
| 208 | Store Ojo Oracle Contract Wasm Code | Wed Aug 23 2023 18:50:44 UTC | Sat Aug 26 2023 18:50:44 UTC | ✅ YES |
| 210 | Incentivizing DOT/STARS Pools on the Pablo DEX | Thu Aug 24 2023 15:55:48 UTC | Sun Aug 27 2023 15:55:48 UTC | 🤷‍♂️ ABSTAIN |
| 211 | Recover NOIS IBC Expired Client | Thu Aug 24 2023 21:13:09 UTC | Sun Aug 27 2023 21:13:09 UTC | ⏳ not yet voted |
| 212 | Stargaze v12 Upgrade | Fri Aug 25 2023 04:03:15 UTC | Mon Aug 28 2023 04:03:15 UTC | ⏳ not yet voted |
| 213 | Stargaze integration with Huddle01 | Fri Aug 25 2023 21:35:51 UTC | Mon Aug 28 2023 21:35:51 UTC | ⏳ not yet voted |

---

### 🗳 208: Store Ojo Oracle Contract Wasm Code
- Voting Start: Wed Aug 23 2023 18:50:44 UTC
- Voting End: Sat Aug 26 2023 18:50:44 UTC

<details>
<summary>Proposal Text</summary>
 
## Store Ojo Oracle Contract Wasm Code

This proposal intends to upload the Ojo Oracle Contract for use by Stargaze. The Stargaze team has agreed to begin using Ojo's STARS price feed as a way for users to set NFT prices in USD instead of in STARS. From the users' perspective, this is mainly a UX improvement. Ojo has already been deployed to Juno, Secret Network, Comdex, Archway, and Umee.

Ojo uses a push-model price oracle contract which broadcasts regular price updates. We plan on being the premiere oracle of the Cosmos; 60+ assets will be added to these feeds over the course of time, many of which are cosmos-native assets such as liquid staking tokens, stablecoins, and LP tokens. This also includes our Smart Oracle offering, which provides contextual data about these price feeds for DeFi to make safer decisions on how to mitigate risk.

## Yes
Vote YES on this proposal to support an Ojo Oracle Contract being deployed to Stargaze.

## No
Vote NO on this proposal to oppose an Ojo Oracle Contract being deployed to Stargaze.

### References
- [Ojo Network docs](https://docs.ojo.network/integrate)
- [Ojo GitHub](https://github.com/ojo-network)
- [Ojo Whitepaper](https://github.com/ojo-network/ojo/blob/main/whitepaper.pdf)
- [Integration Docs](https://docs.ojo.network)

### Compile Instructions

```sh
docker run --rm -v $(pwd):/code \
 --mount type=volume,source=$(basename $(pwd))_cache,target=/code/target \
 --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
 cosmwasm/workspace-optimizer:0.12.7
```

### This results in the following SHA256 checksum:

```
560673bbd71f1bf10326048292313e9c9c0e29cc4f45b2377a4faee1f72c5107 std_reference.wasm
```

### Verify On-chain Contract

```sh
starsd q gov proposal $id --output json \
| jq -r '.content.wasm_byte_code' \
| base64 -d \
| gzip -dc \
| sha256sum
```

### Verify Local Contract

```
sha256sum artifacts/std_reference.wasm
```
</details>

---

### 🗳 210: Incentivizing DOT/STARS Pools on the Pablo DEX
- Voting Start: Thu Aug 24 2023 15:55:48 UTC
- Voting End: Sun Aug 27 2023 15:55:48 UTC

<details>
<summary>Proposal Text</summary>
 
PROPOSALnThe Composable Finance team proposes to allocate 2,000,000 STARS for a DOT/STARS pool on the Pablo Decentralized Exchange (DEX), to be paid for by the Stargaze community pool. These stars will be allocated over 180 days. The DOT/STARS pool is the first time STARS will be available to native DotSama users, thus the goal of this proposal is to attract additional liquidity to the pool.nThis proposal, if passed, would distribute the requested amount of STARS to the multi-sig account listed below, which will move the funds over to Picasso via its Centauri bridge. These incentives will go live on within a week of receipt.nBACKGROUNDnPolkadot (DOT):nPolkadot (DOT), the native token of the Polkadot Network. DOT’s use cases have been previously restricted to DotSama, with its key functions in Polkadot being securing the relay chain and leasing of parachains. However, Composable’s Centauri bridge now allows for the creation of new use cases for DOT in the interchain. This will likely also attract new users (from DotSama) to Cosmos and vice versa.nDOT currently holds a market cap of $6,201,293,681, ranking 13th overall amongst networks and holds an average trading volume of $98,502,212 at the time of writing (as per CoinMarketCap). Polkadot has 1.4 million twitter followers, and 81.2 thousand reddit followers. The total value locked across all DotSama parachains is over $125 million.nDOT is available on 96 exchanges (as per Coincodex), encompassing most of the major exchanges in the industry, such as Binance, KuCoin, OKX, Huobi Global, and Kraken. Notably, thanks to Composable’s Centauri bridge, DOT can now be exchanged for Cosmos-native assets on both Osmosis and Composable’s Pablo DEX. Thus, DOT is a highly available and popular asset, making it an optimal candidate to put in a liquidity pool with STARS.nCentauri:nThanks to Composable Finance’s new Centauri bridge, Cosmos and Polkadot/Kusama are trustlessly connected for the first time. That means that assets can now flow back and forth between these two major ecosystems, opening new opportunities for users to participate and utilize idle assets.nCentauri is the first trustless connection between DotSama and the Interchain. This is facilitated by both Composable’s Kusama parachain, Picasso, and the Inter-Blockchain Communication (IBC) Protocol. Resultantly, all 46+ IBC-enabled chains can interoperate with ~80 DotSama parachains, with each ecosystem’s native assets now being able to flow to the other.nThe Pablo DEX:nThe Pablo Decentralized Exchange (DEX) is the first trustless and non-custodial cross-ecosystem DEX unifying liquidity across the major ecosystems. Pablo exists on Composable’s Picasso parachain, and leverages the Centauri bridge. Thus, Pablo offers a number of liquidity pools between Cosmos-native and DotSama-native assets.nPablo’s DOT/STARS PoolnThe DOT/STARS pool on Pablo will enable users to take advantage of newly introduced opportunities to transact between Cosmos and DotSama. This will help facilitate the flow of liquidity and volume between DotSama projects and Cosmos Projects such as Stargaze. Specifically, DOT owners can come to the DOT/STARS pool on Pablo to swap for STARS, which can then be leveraged for use on Stargaze and beyond (and vice versa).nIncentivizing this pool aims to attract liquidity in order to onboard new holders and users of STARS from the DotSama ecosystem.nMultisignFunds will be received and moved from the Cosmos side using a 2-of-3 multisig handled by:nNotional DAO (Development Shop + Validator)nAlkedata (Validator)nDon Cryptonium (Community Member)nat multisig address stars1yfujl2wd6skqudwamk2z3e2f0q96k9urcgfpt8nVotingnBy voting Yes you agree to allocate 2,000,000 STARS to incentivize STARS/DOT LP on Pablo DEX.nBy voting No you reject allocating 2,000,000 STARS to incentivize STARS/DOT LP on Pablo DEX.n
</details>

---

### 🗳 211: Recover NOIS IBC Expired Client
- Voting Start: Thu Aug 24 2023 21:13:09 UTC
- Voting End: Sun Aug 27 2023 21:13:09 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal aims to recover the expired client 07-tendermint-237 belonging to the Nois connection and update it to client 07-tendermint-285. 

 For more information, read the discussion in Commonwealth: https://commonwealth.im/stargaze/discussion/12856-recover-expired-client-from-nois-network
</details>

---

### 🗳 212: Stargaze v12 Upgrade
- Voting Start: Fri Aug 25 2023 04:03:15 UTC
- Voting End: Mon Aug 28 2023 04:03:15 UTC

<details>
<summary>Proposal Text</summary>
 
# Stargaze v12 Upgrade

This upgrade adds a new module, updates to CosmWasm, and bugfixes.

- packet-forward-middleware
- wasmd v0.33 with 1_2 and 1_3 capabilities


## Details of upgrade time
This proposal suggests block #9796507 for the upgrade, which is estimated to be at Wednesday 30th August 15:00 UTC, using avg block time of 5.87 secs https://www.mintscan.io/stargaze/blocks/9796507
When the network reaches the halt height, the state machine of the blockchain will be halted. Cosmovisor, if configured properly, will then switch the binary used for v12.0.0, and then the chain will continue to make progress.
In the event of an issue at upgrade time, we will coordinate via the #verified-validators channel in Discord.
[Upgrade Instructions](https://github.com/public-awesome/mainnet/blob/main/stargaze-1/v12_0_0_UPGRADE.md)
</details>

---

### 🗳 213: Stargaze integration with Huddle01
- Voting Start: Fri Aug 25 2023 21:35:51 UTC
- Voting End: Mon Aug 28 2023 21:35:51 UTC

<details>
<summary>Proposal Text</summary>
 
GoalnIntegrate Huddle01 infrastructure on Stargaze enabling NFT token-gated meetings, developer community to build A/V applications and Stargaze names DID integrations.nnProposal in detail here - https://commonwealth.im/stargaze/discussion/12257-huddle01-integration-for-stargazennWebsite: - https://www.huddle01.com/nnUse cases examples -n1. Every NFT can have token Gated Meetings via subdomain. Imagine all BadKids holders have a token-gated community call with an upcoming collab.land integration on Discord or via a custom sub-domain like pudgy penguins highlighted above.n2. Game-fi is building up on Stargaze. Huddle01's upcoming Unity SDK can power Games with their Audio chat. n3. Business Development efforts with events to host NFT tickets on Stargaze. We can have demo days and more in token-gated online meetings for ticket holders.n4. NFT ticketing for online concerts, shows, and more. Token-gated meetings are possible for all these avenues.n5. Stargazes names integration on the Huddle01 applicationn6. Analytics for stargaze/Stargaze NFT projects community calls allowing the attendees to be airdropped NFTs/Tokens etcnnImplementation:n- Stargaze chain integrationn- Stargaze NFT integrationn- Stargaze NFT token Gated meetingsn- Custom sub-domain and branding services for Stargaze NFTs nnTimeline - 3-4 weeksnnWe have 3/5 multi-sig.nTwo multi-sig signers are from the Huddle01 team and the other three of multi-sig signers aren- Notional DAOn- Omniflixn- PoshHumannnmultisig address: -stars104svw09zdmhy369z5uwmkh7zc96sf26j8g96pannFunding Requestedn- 10000$ 
</details>
