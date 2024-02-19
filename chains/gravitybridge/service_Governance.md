## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 227 | Recover user funds stuck in community pool | Tue Feb 20 2024 20:02:41 UTC | 🤷‍♂️ ABSTAIN |

---

### 🗳 227: Recover user funds stuck in community pool
- Voting Start: Thu Feb 15 2024 20:02:41 UTC
- Voting End: Tue Feb 20 2024 20:02:41 UTC

<details>
<summary>Proposal Text</summary>
 
On Aug 13 2023 the following TX was sent from Ethereum to Unification via Gravitynn https://etherscan.io/tx/0x7c4505443e8cdb326f44abebf1cf4cabb63b5267816f8d27acbb04719b5ab367n This transaction is malformed as you can see by going to 'decode input data' the destination address is invalid bech32.nThe cause of this failure was a bug in the Unification frontend where destination addresses where not validated.n When an invalid SendToEth is detected Gravity Bridge places the funds into the community pool to be retrieved via governance. This vote, if passed will restore the 15,939 FUND from the community pool to the sender of this message.nn This verified signature https://etherscan.io/verifySig/24723 provides proof of a destination address for this user on Gravity Bridge
</details>
