## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)


### Active IBC channels `mars`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| mars-1 | osmosis-1 | transfer | channel-1 |
| mars-1 | crescent-1 | transfer | channel-5 |
| crescent-1 | mars-1 | transfer | channel-35 |
| osmosis-1 | mars-1 | transfer | channel-557 |