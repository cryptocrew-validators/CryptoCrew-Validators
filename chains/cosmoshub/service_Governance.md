## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 841 | 💎ATOM Airdrop ✅ - DYDX Migration - nBTC New Feature! | Wed Nov 15 2023 15:00:19 UTC | ABSTAIN |
| 842 | Cosmos Hub adopt the Skip Block SDK | Thu Nov 16 2023 20:08:56 UTC | ✅ YES |
| 844 | Update Global Fee Parameters | Mon Nov 20 2023 09:16:12 UTC | ✅ YES |
| 847 | 💎Atom Airdrop ✅ - New Lightning Network  | Mon Nov 20 2023 16:00:18 UTC | ABSTAIN |
| 849 | 💎Atom Airdrop ✅ - Discover The Premium Network | Tue Nov 28 2023 16:39:28 UTC | ⏳ NOT VOTED |

---

### 🗳 841: 💎ATOM Airdrop ✅ - DYDX Migration - nBTC New Feature!
- Voting Start: Wed Nov 01 2023 15:00:19 UTC
- Voting End: Wed Nov 15 2023 15:00:19 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 842: Cosmos Hub adopt the Skip Block SDK
- Voting Start: Thu Nov 02 2023 20:08:56 UTC
- Voting End: Thu Nov 16 2023 20:08:56 UTC

<details>
<summary>Proposal Text</summary>
 
### Authors

Sam Hart (Head of Product & Strategy) and Maghnus Mareneck (Co-Founder) of Skip Protocol

### Background

The Cosmos Hub continues to grow as a central trust layer for the AEZ and wider Cosmos. With the expansion of ICS and the addition of Neutron and Stride, the Hub has increased responsibility and importance in the security and extensibility that it can offer to the interchain.

That said, some of the Hub's functionality is still based on dated Cosmos chain design formulated just as IBC was coming online. In particular, the Hub uses a first-come-first-serve, monolithic, and generalized mempool, and does not take advantage of any of the new Cosmos SDK advancements including ABCI++, vote extensions, or enhanced block-production capabilities that Skip has deployed widely across the interchain.

### This has nothing to do with MEV

The Hub, like Bitcoin, currently has very-little-to-no MEV (we checked). This is because Hub transactions are mostly transfers, staking events, and light client updates. This is likely how it will stay, and so **nothing in this proposal suggests introducing a MEV recapture or distribution mechanism.** Rather, it focuses on improving the Hub revenue model by focusing on fee market improvements that have been developed and been battle-tested over the years since the Hub was first deployed.

As an aside, much of Skip's work has transitioned from MEV capture, and into core infrastructure work to improve the Cosmos ecosystem, as demonstrated by the [Skip API](https://api-docs.skip.money/docs) and the [Block SDK](https://docs.skip.money/chains/overview/).

### Proposal

The next planned upgrade of the Cosmos Hub will have [version 0.47](https://github.com/cosmos/gaia/issues/2730), which natively supports ABC++ functionality (but doesn't do anything with it). We propose putting it to work.

Our proposal: After the Cosmos Hub upgrades to Cosmos SDK 0.47 and has proven the software is stable, the subsequent upgrade should adopt the open-source Block SDK, the primary research and development focus of Skip Protocol built on ABCI++, and include the EIP-1559 fee market lane that Skip is building in collaboration with Osmosis Labs.

### Why upgrade?

The current fee market on the Cosmos Hub, controlled by the [Global Fee Module](https://github.com/cosmos/gaia/blob/main/docs/modules/globalfee.md), is very rudimentary and overdue for an upgrade. Transactions are charged a minimum fee irregardless of network load or demand, which is set by governance. Individual validators may choose to responsively increase fees by changing their local configuration. This causes several of problems:

- In order for the Hub to capture additional revenue when the network has any kind of increased load, validators must monitor the mempool and create their own pricing software that resets their configuration file.
- There is no way for clients to know what fees validators have set locally, meaning wallets and front-ends must guess what fee to set beyond the base fee level. This can cause failed transactions, or transactions may wait in the mempool without ever being accepted. Empirically, most validators use the global fee default, however validators will make such changes to their local fee settings if the Hub ever encounters a spike in transaction load.
- The Hub is overcharging users for transactions when there is little demand for blockspace and plenty of compute resources available
- And most importantly, The Hub's performance and liveness will be significantly degraded if there *is* demand for blockspace (e.g. more light client updates from more IBC connections, or many more ICS chains deployed). More concerning is that the Hub is extremely vulnerable to DDoS today.

That is to say, the Hub's fee market needs an update to scale and meet the needs its current security offering. Although the Hub has operated without incident to date, this could change quickly, and it will be too late once it does.

### How EIP-1559 fixes the issues above

EIP-1559 is the adaptive fee market developed within the Ethereum community. Sam Hart worked on EIP-1559 at the earliest stages, helping to validate the design. Additionally, while at the ICF, Sam ran the fee market working group, which mapped out various fee market designs for Cosmos. This work led to changes in Tendermint that allowed for fee prioritization, and generated ideas that would eventually lead to Sommelier's multi-token auction model, as well as Osmosis and Notional's work on cross-chain fee abstraction.

Since deployment EIP-1559 has processed over billions USD-equivalent in fees, and proven itself as a robust and UX-friendly fee market design.

The TLDR of EIP-1559 is that it implements a base
</details>

---

### 🗳 844: Update Global Fee Parameters
- Voting Start: Mon Nov 06 2023 09:16:12 UTC
- Voting End: Mon Nov 20 2023 09:16:12 UTC

<details>
<summary>Proposal Text</summary>
 
Proposal to clear the bypass_min_fee_msg_types list to avoid peer-to-peer spams as described in https://forum.cosmos.network/t/set-a-minimum-gas-price-of-0-005uatom/11779.
</details>

---

### 🗳 847: 💎Atom Airdrop ✅ - New Lightning Network 
- Voting Start: Mon Nov 06 2023 16:00:18 UTC
- Voting End: Mon Nov 20 2023 16:00:18 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 849: 💎Atom Airdrop ✅ - Discover The Premium Network
- Voting Start: Tue Nov 14 2023 16:39:28 UTC
- Voting End: Tue Nov 28 2023 16:39:28 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>
