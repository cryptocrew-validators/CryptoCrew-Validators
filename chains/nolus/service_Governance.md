## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 65 | Unpin old inactive contract codes | Fri Jan 05 2024 14:47:16 UTC | ✅ YES |
| 66 | Add NLS and stATOM to the Neutron Oracle | Sat Jan 06 2024 14:28:55 UTC | ⏳ NOT VOTED |

---

### 🗳 65: Unpin old inactive contract codes
- Voting Start: Thu Jan 04 2024 14:47:16 UTC
- Voting End: Fri Jan 05 2024 14:47:16 UTC

<details>
<summary>Proposal Text</summary>
 
Code pinning is a mechanism that allows contract code IDs to be pinned to memory. This way code does not have to be loaded to memory on each execution which in turn reduces the gas requirement for each transaction involving that contract. With each new migration, new code IDs need to be stored on-chain. These effectively replace the old ones which are not used. The old IDs which have already been pinned, remain that way and cost the node providers memory which, even though small, may compound over time, as new contracts are being stored and pinned on-chain.nnBy voting YES to this proposal you agree to unpin the code IDs of old contracts that are not active anymore. After this proposal has passed, the pinned code IDs should be as follows (14 in total): 

n* 43 - Admin 
n* 44 - Time Alarms 
n* 45 - Treasury 
n* 47 - Leaser (Osmosis) 
n* 48 - LPP (Osmosis) 
n* 49 - Oracle (Osmosis) 
n* 50 - Profit (Osmosis) 
n* 51 - Lease (Osmosis) 
n* 57 - Rewards Dispatcher 
n* 58 - Leaser (Neutron) 
n* 59 - Lease (Neutron) 
n* 60 - LPP (Neutron) 
n* 61 - Oracle (Neutron) 
n* 62 - Profit (Neutron)
</details>

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
