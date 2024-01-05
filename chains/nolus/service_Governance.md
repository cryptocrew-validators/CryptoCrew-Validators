## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 59 | Whitelist nolus1zgzdzq8aqxff3naz37594tjfgt7aqde600cm0n as the first price feeder for the Neutron Astroport Oracle smart contract | Fri Jan 05 2024 14:25:50 UTC | ✅ YES |
| 60 | Whitelist nolus17vsqxfc0u6esrsz3cnq2nafh6ej8maewm2h7vm as the second price feeder for the Neutron Astroport Oracle smart contract | Fri Jan 05 2024 14:26:07 UTC | ✅ YES |
| 61 | Whitelist nolus1t74ve2d6vk7t9adpqu4yuf4jc57n8dxyzu995f as the third price feeder for the Neutron Astroport Oracle smart contract | Fri Jan 05 2024 14:26:13 UTC | ✅ YES |
| 62 | Whitelist nolus18eu0qer2ajwyurhg2vt3cd5v7h5uavmxmv6aux as the fourth price feeder for the Neutron Astroport Oracle smart contract | Fri Jan 05 2024 14:26:24 UTC | ✅ YES |
| 63 | Whitelist nolus1t09az506kccdypx692gvnqrkr3p5le2fc8leyv as the fifth price feeder for the Neutron Astroport Oracle smart contract | Fri Jan 05 2024 14:26:30 UTC | ⏳ NOT VOTED |
| 64 | Pin new contract codes | Fri Jan 05 2024 14:32:37 UTC | ⏳ NOT VOTED |
| 65 | Unpin old inactive contract codes | Fri Jan 05 2024 14:47:16 UTC | ⏳ NOT VOTED |

---

### 🗳 59: Whitelist nolus1zgzdzq8aqxff3naz37594tjfgt7aqde600cm0n as the first price feeder for the Neutron Astroport Oracle smart contract
- Voting Start: Thu Jan 04 2024 14:25:50 UTC
- Voting End: Fri Jan 05 2024 14:25:50 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist nolus1zgzdzq8aqxff3naz37594tjfgt7aqde600cm0n as the first price feeder for the Neutron Astroport Oracle smart contractnn## SummarynOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. With the latest Astroport integration on Neutron, there are now two providers from which the Oracle system of Nolus can retrieve prices - Osmosis and Neutron. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nnBy voting YES on this proposal, you agree to whitelist the first price feeder for the Astroport Oracle smart contract. Each service is located in a different geolocation and is configured to push a price every 60 seconds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>

---

### 🗳 60: Whitelist nolus17vsqxfc0u6esrsz3cnq2nafh6ej8maewm2h7vm as the second price feeder for the Neutron Astroport Oracle smart contract
- Voting Start: Thu Jan 04 2024 14:26:07 UTC
- Voting End: Fri Jan 05 2024 14:26:07 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist nolus17vsqxfc0u6esrsz3cnq2nafh6ej8maewm2h7vm as the second price feeder for the Neutron Astroport Oracle smart contractnn## SummarynOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. With the latest Astroport integration on Neutron, there are now two providers from which the Oracle system of Nolus can retrieve prices - Osmosis and Neutron. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nnBy voting YES on this proposal, you agree to whitelist the second price feeder for the Astroport Oracle smart contract. Each service is located in a different geolocation and is configured to push a price every 60 seconds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>

---

### 🗳 61: Whitelist nolus1t74ve2d6vk7t9adpqu4yuf4jc57n8dxyzu995f as the third price feeder for the Neutron Astroport Oracle smart contract
- Voting Start: Thu Jan 04 2024 14:26:13 UTC
- Voting End: Fri Jan 05 2024 14:26:13 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist nolus1t74ve2d6vk7t9adpqu4yuf4jc57n8dxyzu995f as the third price feeder for the Neutron Astroport Oracle smart contractnn## SummarynOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. With the latest Astroport integration on Neutron, there are now two providers from which the Oracle system of Nolus can retrieve prices - Osmosis and Neutron. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nnBy voting YES on this proposal, you agree to whitelist the third price feeder for the Astroport Oracle smart contract. Each service is located in a different geolocation and is configured to push a price every 60 seconds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>

---

### 🗳 62: Whitelist nolus18eu0qer2ajwyurhg2vt3cd5v7h5uavmxmv6aux as the fourth price feeder for the Neutron Astroport Oracle smart contract
- Voting Start: Thu Jan 04 2024 14:26:24 UTC
- Voting End: Fri Jan 05 2024 14:26:24 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist nolus18eu0qer2ajwyurhg2vt3cd5v7h5uavmxmv6aux as the fourth price feeder for the Neutron Astroport Oracle smart contractnn## SummarynOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. With the latest Astroport integration on Neutron, there are now two providers from which the Oracle system of Nolus can retrieve prices - Osmosis and Neutron. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nnBy voting YES on this proposal, you agree to whitelist the fourth price feeder for the Astroport Oracle smart contract. Each service is located in a different geolocation and is configured to push a price every 60 seconds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>

---

### 🗳 63: Whitelist nolus1t09az506kccdypx692gvnqrkr3p5le2fc8leyv as the fifth price feeder for the Neutron Astroport Oracle smart contract
- Voting Start: Thu Jan 04 2024 14:26:30 UTC
- Voting End: Fri Jan 05 2024 14:26:30 UTC

<details>
<summary>Proposal Text</summary>
 
# Whitelist nolus1t09az506kccdypx692gvnqrkr3p5le2fc8leyv as the fifth price feeder for the Neutron Astroport Oracle smart contractnn## SummarynOracle market data price feeders are an essential part of the Nolus core architecture which uses its own Oracle system. Each price feeding service is an independent lightweight off-chain component that retrieves prices from configured price providers for a set of denomination pairs. With the latest Astroport integration on Neutron, there are now two providers from which the Oracle system of Nolus can retrieve prices - Osmosis and Neutron. The price feeders utilize a variant of the Exponential Moving Average (EMA) algorithm for the price calculation of any given cryptocurrency pair. Through the use of this algorithm, one can put additional weights on more recently observed prices for a given period. To read more about the role of the price feeders in Nolus, have a look at the [documentation](https://hub.nolus.io/en_US/technical-documentation/oracles-alarms).nnBy voting YES on this proposal, you agree to whitelist the fifth price feeder for the Astroport Oracle smart contract. Each service is located in a different geolocation and is configured to push a price every 60 seconds.nn## Source codenEach price feeding service is built from the [oracle-price-feeder](https://github.com/nolus-protocol/oracle-price-feeder) repository. You can find the configuration for a feeder running on mainnet [here](https://github.com/nolus-protocol/oracle-price-feeder/blob/main/configurations/market-data-feeder.main.toml).
</details>

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
