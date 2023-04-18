## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)


### Active IBC channels `bandchain`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| laozi-mainnet | comdex-1 | oracle | channel-96 |
| laozi-mainnet | injective-1 | oracle | channel-7 |
| laozi-mainnet | osmosis-1 | transfer | channel-83 |
| comdex-1 | laozi-mainnet | bandoracleV1 | channel-43 |
| injective-1 | laozi-mainnet | oracle | channel-3 |
| osmosis-1 | laozi-mainnet | transfer | channel-148 |