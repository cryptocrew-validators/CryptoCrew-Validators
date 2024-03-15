## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 886 | New Cosmos $ATOM Fork ⚛️ - AtomOne is READY! ⭐ | Sat Mar 16 2024 10:23:57 UTC | ABSTAIN |
| 887 | 💎ATOM Airdrop ✅ - New dApps on Atom ⚛️ | Thu Mar 21 2024 22:01:15 UTC | ABSTAIN |
| 888 | 2024 New Version! ⭐ - New dApps on Atom ⚛️ | Mon Mar 25 2024 19:23:32 UTC | ABSTAIN |
| 889 | Atom to $1000 🚀 - Price Prediction 2024 ✅ | Thu Mar 28 2024 01:39:30 UTC | ABSTAIN |
| 890 | Signaling Proposal: IBC Rate Limiting | Thu Mar 28 2024 17:24:57 UTC | ⏳ NOT VOTED |
| 891 | Allocate 900k ATOM for The Next - 💎Atom Airdrop ✅ | Fri Mar 29 2024 16:35:18 UTC | ⏳ NOT VOTED |

---

### 🗳 886: New Cosmos $ATOM Fork ⚛️ - AtomOne is READY! ⭐
- Voting Start: Sat Mar 02 2024 10:23:57 UTC
- Voting End: Sat Mar 16 2024 10:23:57 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 887: 💎ATOM Airdrop ✅ - New dApps on Atom ⚛️
- Voting Start: Thu Mar 07 2024 22:01:15 UTC
- Voting End: Thu Mar 21 2024 22:01:15 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 888: 2024 New Version! ⭐ - New dApps on Atom ⚛️
- Voting Start: Mon Mar 11 2024 19:23:32 UTC
- Voting End: Mon Mar 25 2024 19:23:32 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 889: Atom to $1000 🚀 - Price Prediction 2024 ✅
- Voting Start: Thu Mar 14 2024 01:39:30 UTC
- Voting End: Thu Mar 28 2024 01:39:30 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 890: Signaling Proposal: IBC Rate Limiting
- Voting Start: Thu Mar 14 2024 17:24:57 UTC
- Voting End: Thu Mar 28 2024 17:24:57 UTC

<details>
<summary>Proposal Text</summary>
 
## TL;DR;nThis proposal recommends a mechanism that may limit damage to user funds in the case of an exploited vulnerability. If it passes, the [IBC Rate Limit module](https://github.com/Stride-Labs/ibc-rate-limiting) developed by Stride Labs will be added to the Cosmos Hub.nn## OverviewnAs the Interchain ecosystem and economy grows in importance, it becomes increasingly important to ensure that each sovereign chain and their inter-connections are protected against exploits. nnThere are a number of different ways to achieve this; exhaustive testing, code audits and a variety of defensive measures can also be enacted. No matter what measures are taken, there will always exist a potential for misuse in any complex system. Therefore, it is prudent to have defensive measures in place as well, especially because code bugs, environment and library vulnerabilities can manifest themselves in unforeseen ways. This proposal seeks the community’s opinion about the integration of a defensive mechanism to reduce the impact of any exploited vulnerabilities.nnVulnerabilities that exploit user funds can always be rolled back if an appropriate governance vote has taken place, as long as the sandbox is an isolated blockchain. If funds can be on-boarded or off-boarded to other chains, then the instant a vulnerability is exploited, funds can be moved to other chains, beyond the reach of any governance claw back from the exploited chain. The mechanism to off-board funds would be via any bridges to other chains or via IBC support. A rate limiting feature would limit the amount of incoming and outgoing traffic from a particular network that matches a specific criteria.nn## Previous Exploits and Other ImplementationsnExamples of previous real or potential exploits on the Cosmos Hub and other ecosystems are shown below:nn- [Polynetwork Bridge Hack](https://rekt.news/polynetwork-rekt/) ($611 million)n- [BNB Bridge Hack](https://rekt.news/bnb-bridge-rekt/) ($586 million)n- [Wormhole Bridge Hack](https://rekt.news/wormhole-rekt/) ($326 million)n- [Nomad Bridge Hack](https://rekt.news/nomad-rekt/) ($190 million)n- [Harmony Bridge Hack](https://rekt.news/harmony-rekt/) ($100 million)n- [Dragonberry IBC bug](https://forum.cosmos.network/t/ibc-security-advisory-dragonberry/7702)nnnThe rate limiting technique is a useful tool that is implemented in a variety of scenarios, including the area of financial transactions, for example [on the Osmosis chain](https://github.com/osmosis-labs/osmosis/tree/v23.0.0/x/ibc-rate-limit).nn## ProposalnWe propose adding the [Rate Limit module](https://github.com/Stride-Labs/ibc-rate-limiting) developed by Stride Labs to the Cosmos Hub. The module prevents massive inflows or outflows of IBC tokens in a short time frame (e.g., 24 hour window). Every rate limit is applied at a `ChannelID + Denom` granularity. For example, a rate limit could be added for `uatom` on the Cosmos Hub <> Osmosis channel (`channel-141`). nnEvery rate limit will also have a configurable threshold that dictates the max inflow/outflow along the channel. The threshold is represented as a percentage of the total supply of the denom at the start of the time window, and it remains constant until the window expires. For instance, the rate limit for `uatom` on `channel-141` might have a threshold of 5% for both inflow and outflow. Given the total supply of 388M ATOMs, such a rate limit would reject any IBC transfer that would cause a net inflow or outflow greater than 19.4M ATOMs. Once the time window expires, the net inflow and outflow are reset to 0.nnInitially, we propose the add the following (conservative) rate limits (for both inflow and outflow) with a 24 hour time window:n* 5% for `uatom` on Cosmos Hub <> Osmosis (`channel-141`) – a net flow of 19.4M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Neutron (`channel-569`) – a net flow of 3.9M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Stride (`channel-391`) – a net flow of 3.9M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Kujira (`channel-343`) – a net flow of 3.9M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Injective (`channel-220`) – a net flow of 3.9M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Persistence (`channel-190`) – a net flow of 3.9M ATOMs / dayn* 1% for `uatom` on Cosmos Hub <> Secret (`channel-235`) – a net flow of 3.9M ATOMs / daynnThese limits are conservative enough to avoid false positives – user transfers being rejected – while still providing an initial protection against exploits. The proposed values are based on the following back-of-the-envelope calculation: In the last 14 days, ~400.000 ATOMs were transferred out of the Hub on average per day, which is ~ 0.1% of the total ATOM supply, and most of this is transferred to Osmosis (more than 90%). This makes the suggested 5% limit large enough to avoid false positives. nnOnce these rate limits are added, both the inflow and outflow on these channels can be monitored (`gaiad q ratelimit list-rate-limits`) and the limits can be adjusted accordingly. Note that the Rate Limit module enables rate limits to be added and updated via governance proposals. nn## Proposal OutcomesnThe following items summarize the voting options and what they mean for this proposal:nn**Upon a YES vote:**n* The [Rate Limit module](https://github.com/Stride-Labs/ibc-rate-limiting) developed by Stride Labs will be integrated into Gaia and rolled out in one of the next major releases. nn**Upon a NO vote:**n* The Rate Limit module will not be added to the Hub and the discussions with the community will continue to find the best path forward to introduce the rate limiting feature that helps to protect user funds.nn**NO WITH VETO** - A ‘NoWithVeto’ vote indicates a proposal either (1) is deemed to be spam, i.e., irrelevant to Cosmos Hub, (2) disproportionately infringes on minority interests, or (3) violates or encourages violation of the rules of engagement as currently set out by Cosmos Hub governance. If the number of ‘NoWithVeto’ votes is greater than a third of total votes, the proposal is rejected and the deposits are burnednn**ABSTAIN** - You wish to contribute to quorum but you formally decline to vote either for or against the proposalnnn## Referencesnn* This proposal references the existing [Github Issue](https://github.com/cosmos/gaia/issues/1945) and the [technical discussion](https://github.com/informalsystems/interchain/blob/main/security/rate-limiter.md).n* A [CosmWasm implementation](https://github.com/osmosis-labs/osmosis/tree/v23.0.0/x/ibc-rate-limit) of the Rate Limit module can be found on the Osmosis chain.n* A [specification](https://github.com/informalsystems/interchain/blob/main/security/rate-limiter.md) of the Osmosis implementation of the Rate Limit module. n* A [Cosmos SDK implementation](https://github.com/Stride-Labs/stride/tree/v18.0.0/x/ratelimit) of the Rate Limit module can be found on the Stride chain. n* The Rate Limit module developed by Stride was also ported into [its own module](https://github.com/Stride-Labs/ibc-rate-limiting) that can be used by other chains, such as the Cosmos Hub.n
</details>

---

### 🗳 891: Allocate 900k ATOM for The Next - 💎Atom Airdrop ✅
- Voting Start: Fri Mar 15 2024 16:35:18 UTC
- Voting End: Fri Mar 29 2024 16:35:18 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>
