## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 66 | Add NLS and stATOM to the Neutron Oracle | Sat Jan 06 2024 14:28:55 UTC | ⏳ NOT VOTED |

---

### 🗳 66: Add NLS and stATOM to the Neutron Oracle
- Voting Start: Fri Jan 05 2024 14:28:55 UTC
- Voting End: Sat Jan 06 2024 14:28:55 UTC

<details>
<summary>Proposal Text</summary>
 
# Add NLS and stATOM to the Neutron Oraclen## SummarynWith the instantiation of a new set of protocol smart contracts for the Astroport integration on Neutron, every new asset whose price is to be provided to the system, needs to be included in the Oracle swap tree belonging to that specific integration. This proposal aims to add NLS to the swap tree. This is especially necessary for the NLS incentives distribution as they require a reported on-chain price for NLS so that rewards can be calculated and distributed once every 12 hours. In addition, stATOM is to be added to the tree. Below the current breakdown in terms of liquidity of the stATOM/ATOM pool on Astroport: 

n* Standard Pool stATOM/ATOM (4.77M USD) 

nnThis proposal also introduces a new asset to the Oracle swap tree, namely DYDX. DYDX is the native token of the dYdX chain. dYdX is a decentralized self-custodial trading platform for perps. The DYDX token is used primarily for securing and governing the proof-of-stake layer 1 blockchain on which the perp protocol is deployed. Details about DYDX liquidity on Astroport on Neutron: 

n* Passive Concentrated Liquidity (PCL) Pool axlUSDC/DYDX (1.09M USD) 
nnBy voting YES on this proposal, you agree to make these adjustments to the Oracle swap tree and allow the protocol to utilize the paths above to facilitate the lease-relevant transactions on the Neutron blockchain.
</details>
