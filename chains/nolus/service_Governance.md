## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 64 | Pin new contract codes | Fri Jan 05 2024 14:32:37 UTC | ✅ YES |
| 65 | Unpin old inactive contract codes | Fri Jan 05 2024 14:47:16 UTC | ✅ YES |

---

### 🗳 64: Pin new contract codes
- Voting Start: Thu Jan 04 2024 14:32:37 UTC
- Voting End: Fri Jan 05 2024 14:32:37 UTC

<details>
<summary>Proposal Text</summary>
 
Proposal #27 allowed to extend the store code permissions such that an additional wallet address by the Nolus team is able to store code on-chain without the need to go through governance proposal. In that way, there needs to be only one proposal for migration afterwards. As a result, the proposal count was reduced significantly which makes it easier for the community to track the version of the smart contracts. On the other hand, this meant that contracts that are stored on-chain via this additional address, remain unpinned. nnCode pinning is a mechanism that allows contract code IDs to be pinned to memory. This way code does not have to be loaded to memory on each execution which in turn reduces the gas requirement for each transaction involving that contract. This would make the follow-up smart contract migration proposal to be submitted for much less gas than it would cost without the contracts being pinned. nnBy voting YES to this proposal you agree to pin the contract IDs of the newly stored contracts from version v0.4.0 of the smart contracts as well as the Rewards Dispatcher contract from v0.4.1. These include one Platform core contract (Rewards Dispatcher) as well as Protocol contracts (Leaser, LPP, Oracle, Profit and Lease). Due to the Astroport integration, there are two independent sets of Protocol contracts - one for Osmosis and one for Neutron. This makes 14 contracts to be pinned in total. A follow-up proposal would be submitted to unpin unused contract codes.
</details>

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
