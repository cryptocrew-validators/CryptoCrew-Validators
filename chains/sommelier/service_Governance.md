## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 91 | [SIPS-086] Authorize the Turbo STETH Cellar | Fri Oct 13 2023 03:06:58 UTC | ✅ YES |

---

### 🗳 91: [SIPS-086] Authorize the Turbo STETH Cellar
- Voting Start: Wed Oct 11 2023 03:06:58 UTC
- Voting End: Fri Oct 13 2023 03:06:58 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal is for the authorization of the Turbo STETH Cellar. The strategy for the cellar is provided by Seven Seas Capital and DeFine Logic Labs.nnThe goal of the strategy is to maximize ETH-denominated yield using various stETH strategies (e.g. leveraged staking, LPing, etc.) Existing vaults such as RYETH may also take positions in this vault for efficiency purposes. More information about the strategy, including strategy description can be found in the original forum post:nnhttps://community.sommelier.finance/t/sips-086-upcoming-turbo-steth-cellar-proposal/1200nnIf approved, the chain will accept signed function calls submitted to the cellar contract from the strategy provider.nn-------------------------------------------------------------------nnName: Turbo STETHnnCellar share token: TurboSTETHnnPlatform fee: 1% (0.75% for strategy provider + 0.25% for protocol)nnPerformance fee: 20% (15% for strategy provider + 5% for protocol)nnStrategy providers: Seven Seas Capital and DeFine Logic LabsnnCellar address: 0xfd6db5011b171B05E1Ea3b92f9EAcaEEb055e971nnEtherscan: https://etherscan.io/address/0xfd6db5011b171B05E1Ea3b92f9EAcaEEb055e971nnSource: https://github.com/PeggyJV/cellar-contracts/blob/main/src/base/Cellar.solnnAudits (Macro): https://0xmacro.com/library/audits/sommelier-9.htmlnn
</details>
