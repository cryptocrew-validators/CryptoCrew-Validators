## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 257 | Stargaze Liquidity DAO - Request for stOSMO from Community Pool | Fri Mar 15 2024 11:28:24 UTC | 🤷‍♂️ ABSTAIN |
| 258 | Live Auctions: Whitelist Denoms | Sat Mar 16 2024 17:03:05 UTC | ✅ YES |

---

### 🗳 257: Stargaze Liquidity DAO - Request for stOSMO from Community Pool
- Voting Start: Tue Mar 12 2024 11:28:24 UTC
- Voting End: Fri Mar 15 2024 11:28:24 UTC

<details>
<summary>Proposal Text</summary>
 
As a direct follow on from Proposal 249 (https://mintscan.io/stargaze/proposals/249) passing and subsequent rejected/negative sentiment from the Osmosis Community request (https://forum.osmosis.zone/t/stargaze-osmosis-stars-usdc-pol/2482) for matching USDC with STARS for the Stargaze liquidity DAO. The Stargaze Liquidity DAO is now requesting stOSMO from the Stargaze Community Pool to be used as collateral to mint USK, which will be converted to USDC to be used as PoL on Osmosis. The stOSMO will be used as described in the proposal, highlighted below:nnSTARS/USDC Liquidity on Osmosis: Utilizing 213,457.09 stOSMO from the Community Pool, we will mint approximately 68k USK (~15% LTV based on current stOSMO price, which gives a partial liquidation price of ~0.53c, the current price is ~$2). These funds will be swapped for USDC and matched with an equivalent amount of STARS, adding to the existing STARS/USDC Concentrated Liquidity pool 1228 on Osmosis with an estimated value of ~$136k. Ghost has a 1% Interest for minting USK against stOSMO, vs ~8% for borrowing against USDC on other platforms such as Mars or Umee/Ux
</details>

---

### 🗳 258: Live Auctions: Whitelist Denoms
- Voting Start: Wed Mar 13 2024 17:03:05 UTC
- Voting End: Sat Mar 16 2024 17:03:05 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist additional denoms for use in Live Auctionsnn## DescriptionnnThis proposal seeks to introduce additional denominations for use in Stargaze's live auctions. By incorporating these alternative assets we aim to enhance the adoption and usability of the auction marketplace.nn## Key detailsnn### Whitelisted denominationsnn**ATOM**nn- denom: ibc/9DF365E2C0EF4EA02FA771F638BB9C0C830EFCD354629BDC017F79B348B4E989n- origin chain id: cosmoshub-4n- origin denom: uatomn- trace: transfer/channel-239n- minimum auction reserve price: 0.005 uatomnn**stATOM**nn- denom: ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651n- origin chain id: stride-1n- origin denom: stuatomn- trace: transfer/channel-106n- minimum auction reserve price: 0.005 stuatomnn**stSTARS**nn- denom: ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676n- origin chain id: stride-1n- origin denom: stustarsn- trace: transfer/channel-106n- minimum auction reserve price: 1 stustarsnn**wETH.axl**nn- denom: ibc/08CF01F857C36D3C91C3427AA2EACFAFC07971E7AC40B6C433A9982B333F2567n- origin chain id: axelar-dojo-1n- origin denom: weth-wein- trace: transfer/channel-50n- minimum auction reserve price: 0.00001 weth-weinn**Noble USDC**nn- denom: ibc/4A1C18CA7F50544760CF306189B810CE4C1CB156C7FC870143D401FE7280E591n- origin chain id: noble-1n- origin denom: uusdcn- trace: transfer/channel-204n- minimum auction reserve price: 0.05 uusdcnn### Fair BurnnnThese alternative denoms will be subject to the fair burn fee. For now the fair burn fee amount accrued on these assets will be managed by the Liquidity DAO.nn### Auction minimumsnnEach whitelisted denom will have a minimum auction reserve price. This is the minimum amount that an auction can be created for. The minimum auction reserve price is set to ensure that the auction is worth the time and effort of the platform.
</details>
