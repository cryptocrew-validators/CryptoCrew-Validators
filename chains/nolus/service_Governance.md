## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 42 | Whitelist nolus1t09az506kccdypx692gvnqrkr3p5le2fc8leyv as the fifth price feeder for the Oracle smart contract | Thu Sep 21 2023 11:43:31 UTC | ⏳ NOT VOTED |

---

### 🗳 42: Whitelist nolus1t09az506kccdypx692gvnqrkr3p5le2fc8leyv as the fifth price feeder for the Oracle smart contract
- Voting Start: Mon Sep 18 2023 11:43:31 UTC
- Voting End: Thu Sep 21 2023 11:43:31 UTC

<details>
<summary>Proposal Text</summary>
 
# Proposal to Integrate a Fifth Price Feeding Service for Enhanced System Robustnessnn## SummarynAs the total value locked (TVL) within the Nolus protocol continues to increase, ensuring the robustness and security of the systems becomes more critical than ever. One vital component that requires enhanced redundancy is the oracle price feeders.nnOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. Currently, Nolus utilizes Osmosis as a primary DEX of choice for opening, repaying, closing, liquidating the lease (borrow) positions, so for the time being it is the sole price provider. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nn## Existing ArchitecturenThe current architecture relies on four price feeding services. While this redundancy has served well, the growing TVL and our commitment to ensuring maximum security means we must consider further enhancement of the infrastructure. It is imperative that users and stakeholders can trust the continuous and accurate operation of the platform. Each price feeding service is located in a different geolocation and is configured to push a price every 60 seconds.nn## ObjectivenBy voting YES on this proposal, you agree to whitelist the fifth price feeder for the Oracle smart contract that will provide continuous price feed and act as an additional redundancy measure in the unlikely event of inactivity or failure of any of the existing price feeds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>
