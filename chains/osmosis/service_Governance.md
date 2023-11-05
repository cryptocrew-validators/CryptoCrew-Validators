## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 673 | Expedited: Establish Superfluid Staking for TIA and redirect a portion of Incentives | Sun Nov 05 2023 20:03:01 UTC | ⏳ NOT VOTED |
| 674 | Expedited: Add TIA as Fee Token | Sun Nov 05 2023 20:06:56 UTC | ⏳ NOT VOTED |
| 676 | Raise Minimum Gas Price to 0.025 uOSMO | Tue Nov 07 2023 21:14:46 UTC | ⏳ NOT VOTED |

---

### 🗳 673: Expedited: Establish Superfluid Staking for TIA and redirect a portion of Incentives
- Voting Start: Tue Oct 31 2023 20:03:01 UTC
- Voting End: Sun Nov 05 2023 20:03:01 UTC

<details>
<summary>Proposal Text</summary>
 
On passing, this proposal would enable Superfluid Staking on the TIA/OSMO pools (1248 and 1249) on Osmosis as well as allow the Celestia incentive multisig to spend 50% as many incentives on the TIA/OSMO pool compared to the TIA/USDC pool whilst maintaining the original 6000 OSMO/day cap. 

As Osmosis is aiming to be the primary market for Celestia and rollups using the TIA token this proposal is considered to be important for the functioning of this market and so is being proposed as an expedited proposal. 
## Details 
**Superfluid** 
Superfluid proposals ask whether governance trusts in the stability and security of the chain sufficiently to allow their tokens to have an influence on Osmosis governance. 

This proposal would enable Superfluid Staking in the TIA/OSMO pools (1248 and 1249) with the default 25% discount rate. 

**Incentives on OSMO Pool** 
This proposal will also allow the incentive multisig from [Proposal 655](https://www.mintscan.io/osmosis/proposals/665) to spend up to 
Value per day = Celestia Staking rate per day README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Pool TVL README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh 1.5 
On the TIA/OSMO pools up to a cap of 3000 OSMO/day, with a minimum of 1500 per day. While maintaining the overall cap of 6000 OSMO/day across the two pools from the original proposal. Exempting the initial overlapping period. 

This means that half the incentives being spent on the TIA/USDC pool will be spent on TIA/OSMO pools while retaining the same upper limit in potential spend. Where the 6000 OSMO cap is hit then incentives will be split according to demand of each pool. 
## About Celestia 
Celestia is a new type of blockchain that aims to launch a new modular paradigm where each chain is minimal in composition and highly specialized to perform specific tasks. This specialization provides breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain applications for mass adoption. 

Celestia is specialized as a data availability blockchain with the TIA token used to pay for blobspace. This allows new blockchains to be spun up without their own native token, instead using TIA similarly to ETH on Ethereum-based rollups. Developers may opt to bootstrap their chain quickly by using TIA as a gas token and currency, in addition to paying for data availability. In this mode, developers can focus on creating their application or execution layer instead of issuing a token right away. 

**Forum Thread**
[https://forum.osmosis.zone/t/celestia-launch-expedited-proposals/538](https://forum.osmosis.zone/t/celestia-launch-expedited-proposals/538)
</details>

---

### 🗳 674: Expedited: Add TIA as Fee Token
- Voting Start: Tue Oct 31 2023 20:06:56 UTC
- Voting End: Sun Nov 05 2023 20:06:56 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal would add TIA as a valid fee token for Osmosis transactions. 

This allows users whose only interaction with the Cosmos ecosystem is via Celestia to be able to transact for the first time on Osmosis. 

As Osmosis is aiming to be the primary market for Celestia and rollups using the TIA token this proposal is considered to be important for the functioning of this market and so is being proposed as an expedited proposal. 

Fee tokens currently can only be routed through a Classic pool and so this will be routed through pool 1249. 
## About Celestia 
Celestia is a new type of blockchain that aims to launch a new modular paradigm where each chain is minimal in composition and highly specialized to perform specific tasks. This specialization provides breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain applications for mass adoption. 

Celestia is specialized as a data availability blockchain with the TIA token used to pay for blobspace. This allows new blockchains to be spun up without their own native token, instead using TIA similarly to ETH on Ethereum-based rollups. Developers may opt to bootstrap their chain quickly by using TIA as a gas token and currency, in addition to paying for data availability. In this mode, developers can focus on creating their application or execution layer instead of issuing a token right away. 

 **Forum Thread**: [https://forum.osmosis.zone/t/celestia-launch-expedited-proposals/538](https://forum.osmosis.zone/t/celestia-launch-expedited-proposals/538)
</details>

---

### 🗳 676: Raise Minimum Gas Price to 0.025 uOSMO
- Voting Start: Thu Nov 02 2023 21:14:46 UTC
- Voting End: Tue Nov 07 2023 21:14:46 UTC

<details>
<summary>Proposal Text</summary>
 
This is an expedited signaling proposal to increase the protocol-enforced minimum gas price to 0.025 uOSMO. This represents a 10x increase in transaction fees from the current rate of 0.0025 uOSMO.

Over the last several months Osmosis has witnessed a plague of arbitrage bot spam that has significantly and negatively impacted the performance of the chain. Several times, the chain has been so congested to the point that no transactions can get through, effectively halting the chain for users.

Most recently, this occurred during the launch of Celestia's TIA token and a significant upward price movement event for OSMO. This likely resulted in millions of dollars in lost volume on the Osmosis DEX.

While a solution for this in the form of an EIP-1559 fee market developed by Skip Protocol has been proposed for this, the chain cannot afford to wait for this solution to go live. The Osmosis chain is frequently and regularly unstable, impacting value flow to its core products, including the DEX itself, Levana perps, and Mars protocol. This event also represents a significant challenge to these products as they are reliant on consistent asset pricing across markets to prevent price manipulation attacks.

If passed, this proposal also signals to Osmosis contributors (Osmosis Labs) to propose a software upgrade within 7 days of the passage of this proposal implementing the proposed minimum fee changes.

This proposal is a temporary measure, and can be reverted once Skip's fee markets are live in production on the Osmosis mainnet (or can be disregarded if the fee markets are implemented before the time limits set forth in this proposal).

The relevant forum post can be found here: https://forum.osmosis.zone/t/proposal-raise-minimum-gas-price-to-0-1-uosmo/548
</details>
