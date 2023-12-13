## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 55 | Pin new contract codes | Thu Dec 14 2023 13:51:01 UTC | ⏳ NOT VOTED |

---

### 🗳 55: Pin new contract codes
- Voting Start: Wed Dec 13 2023 13:51:01 UTC
- Voting End: Thu Dec 14 2023 13:51:01 UTC

<details>
<summary>Proposal Text</summary>
 
Proposal #27 allowed to extend the store code permissions such that an additional wallet address by the Nolus team is able to store code on-chain without the need to go through governance proposal. In that way, there needs to be only one proposal for migration afterwards. As a result, the proposal count was reduced significantly which makes it easier for the community to track the version of the smart contracts. On the other hand, this meant that contracts that are stored on-chain via this additional address, remain unpinned. nnCode pinning is a mechanism that allows contract code IDs to be pinned to memory. This way code does not have to be loaded to memory on each execution which in turn reduces the gas requirement for each transaction involving that contract. This would make the follow-up smart contract migration proposal to be submitted for much less gas than it would cost without the contracts being pinned. nnBy voting YES to this proposal you agree to pin the contract IDs of the newly stored contracts from version v0.4.0 of the smart contracts. These include Platform contracts (Admin, Time Alarms, Treasury and Rewards Dispatcher) as well as Protocol contracts (Leaser, LPP, Oracle, Profit and Lease). Due to the Astroport integration, there are two independent sets of Protocol contracts - one for Osmosis and one for Neutron. This makes 14 contracts to be pinned in total.
</details>
