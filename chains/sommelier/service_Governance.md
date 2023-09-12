## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 82 | Mutual token swap between Sommelier and MantaDAO | Wed Sep 13 2023 12:14:55 UTC | ⏳ NOT VOTED |
| 83 | [SIPS-078] Authorize the Turbo GHO Cellar | Thu Sep 14 2023 16:55:36 UTC | ⏳ NOT VOTED |
| 84 | [SIPS-079] TurboGHO Liquidity Mining Incentives Proposal | Thu Sep 14 2023 16:58:27 UTC | ⏳ NOT VOTED |

---

### 🗳 82: Mutual token swap between Sommelier and MantaDAO
- Voting Start: Mon Sep 11 2023 12:14:55 UTC
- Voting End: Wed Sep 13 2023 12:14:55 UTC

<details>
<summary>Proposal Text</summary>
 
MantaDAO is proposing a $50k SOMM<>MNTA token swap with the Sommelier Community.nnEach party will match the received token with another $50k of their own token in a BOW LP (the AMM built on top of FIN, Kujira’s orderbook DEX).nThis will result in $200k of SOMM/MNTA liquidity that will make SOMM tradable with limited price impact against a wide variety of assets (axlUSDC,USK, wETH, wBTC, ATOM, KUJI, etc.) thanks to MantaSwap’s multihop router.nHalf of the LP ($100k) will be owned by Sommelier Community Pool; the other half ($100k) will be owned by MantaDAO.nnThis will sustainably deepen liquidity for SOMM in the form of Protocol-Owned Liquidity, at zero cost for Sommelier, and without the need for any incentives. nnThis will also enable the Sommelier Community to diversify its treasury and generate a source of income in the form of trading profits from market-making activities.nnAs part of the deal, MantaDAO also commits to acquire $50k worth of yieldETH that will be matched with $50k worth of MNTA and deposited in a BOW LP, creating the first market for yieldETH in the Cosmos with $100k liquidity.nnAfter the deal, ManatDAO will continue to look at building-up liquidity for Sommelier’s yield generating strategies on Kujira.nnThe recipient address is the Sommelier team's ops multisig.nnThe amounts of MNTA and SOMM for the token swap deal are calculated on 20d TWAP basis: https://docs.google.com/spreadsheets/d/181DKyByXR25LQQ2cUYkr4aB4Hwfyz9KrvsVpMGU_p00/edit#gid=0nnThe full text of the proposal: https://community.sommelier.finance/t/mutual-token-swap-between-sommelier-and-mantadao-in-order-to-build-liquidity-on-kujiras-fin-dex/1177
</details>

---

### 🗳 83: [SIPS-078] Authorize the Turbo GHO Cellar
- Voting Start: Tue Sep 12 2023 16:55:36 UTC
- Voting End: Thu Sep 14 2023 16:55:36 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal is for the authorization of the Turbo GHO Cellar. The strategy for the cellar is provided by Seven Seas Capital and DeFine Logic Labs.nnThe goals of the strategy are to capture the variety of available GHO yield opportunities while providing efficient liquidity and peg defense to the GHO ecosystem. More information about the strategy, including strategy description can be found in the original forum post:nnhttps://community.sommelier.finance/t/sips-078-upcoming-turbo-gho-proposal/1187nnIf approved, the chain will accept signed function calls submitted to the cellar contract from the strategy provider.nn-------------------------------------------------------------------nnName: Turbo GHOnnCellar share token: TurboGHOnnPlatform fee: 0.5% (0.375% for strategy provider + 0.125% for protocol)nnPerformance fee: 20% (15% for strategy provider + 5% for protocol)nnStrategy providers: Seven Seas Capital and DeFine Logic LabsnnCellar address: 0x0C190DEd9Be5f512Bd72827bdaD4003e9Cc7975CnnEtherscan: https://etherscan.io/address/0x0c190ded9be5f512bd72827bdad4003e9cc7975cnnSource: https://github.com/PeggyJV/cellar-contracts/blob/main/src/base/Cellar.solnnAudits (Macro): https://0xmacro.com/library/audits/sommelier-9.htmlnn
</details>

---

### 🗳 84: [SIPS-079] TurboGHO Liquidity Mining Incentives Proposal
- Voting Start: Tue Sep 12 2023 16:58:27 UTC
- Voting End: Thu Sep 14 2023 16:58:27 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal is intended to authorize a one-time transfer of 135,000 SOMM from the community pool to the CellarStaking contract, which is used to incentivize Turbo GHO cellar depositors on Ethereum Mainnet.nnSee the corresponding forum post for more details: https://community.sommelier.finance/t/sips-079-upcoming-turbo-gho-liquidity-mining-incentives-proposal/1188
</details>
