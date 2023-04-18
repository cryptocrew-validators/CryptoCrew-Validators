## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)


### Active IBC channels `vidulum`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| vidulum-1 | osmosis-1 | transfer | channel-0 |
| osmosis-1 | vidulum-1 | transfer | channel-124 |