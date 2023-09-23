## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 631 | Upload CrossChain Registry Contract V1 | Tue Sep 26 2023 15:35:43 UTC | ✅ YES |
| 632 | Upload Crosschain Swaps Contract V2 | Tue Sep 26 2023 15:39:14 UTC | ✅ YES |
| 633 | Upload Swaprouter Contract V2 | Tue Sep 26 2023 15:40:14 UTC | ✅ YES |

---

### 🗳 631: Upload CrossChain Registry Contract V1
- Voting Start: Thu Sep 21 2023 15:35:43 UTC
- Voting End: Tue Sep 26 2023 15:35:43 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload V1 of the Crosschain Registry contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V1 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: 5780a3358cd917fcf05d9f181c56f26904ae45fa68cc355738a75ad263458390 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>

---

### 🗳 632: Upload Crosschain Swaps Contract V2
- Voting Start: Thu Sep 21 2023 15:39:14 UTC
- Voting End: Tue Sep 26 2023 15:39:14 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload an updated version of the Crosschain Swaps contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V2 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: 3839d7281088f0152f643d57854e0625fd709db151e6dfe12da02f00efc3477e 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>

---

### 🗳 633: Upload Swaprouter Contract V2
- Voting Start: Thu Sep 21 2023 15:40:14 UTC
- Voting End: Tue Sep 26 2023 15:40:14 UTC

<details>
<summary>Proposal Text</summary>
 
Passing this proposal will upload an updated version of the Swaprouter contract to the Osmosis chain. 
## Details 
The set of contracts within the XCS bundle enables trades on Osmosis to be carried out remotely from another chain connected to Osmosis by IBC. 

Version two of the contracts simplifies the usage of crosschain swaps by keeping registries with information about IBC channels used, denoms used on Osmosis, and when to use packet forward middleware vs. callbacks. 

The Crosschain Swaps contract receives a token transfer from chain A, looks up the required information from the Crosschain Registry contract, interacts with the Swap Router contract to exchange the received token for a different token, and then forwards it to a destination address specified in the original transaction. 

This instance then looks up the correct information to use from the linked instance of the Crosschain Registry contract and, using this, interacts with the Swap Router contract to exchange the received token for the desired token. 

The resultant tokens are then forwarded to the address initially specified in the memo, be that a return to the address on Chain A or forwarding to an address on Chain C. 

Full Documentation: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts/crosschain-swaps) 
## Contract information 
**Release**: V2 

**Compiler Version**: cosmwasm/workspace-optimizer:0.12.10 

**Checksum**: f8fca2b93dcd4cf0b41b964ba4c6523094dd3097c3269bc88c87f68edc0a9c00 

**Code repository**: [https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts](https://github.com/osmosis-labs/osmosis/tree/main/cosmwasm/contracts) 

**Commit ID**: b90dfad7f2ab8ecdd2806cb51dfa9a72fb80a469 

**Forum Thread**: [https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335](https://forum.osmosis.zone/t/upload-xcs-v2-contracts/335)
</details>
