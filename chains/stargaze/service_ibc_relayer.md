## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)


### Active IBC channels `stargaze`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| stargaze-1 | secret-4 | transfer | channel-48 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |
| stargaze-1 | kaiyo-1 | transfer | channel-49 |
| stargaze-1 | juno-1 | transfer | channel-5 |
| secret-4 | stargaze-1 | transfer | channel-19 |
| juno-1 | stargaze-1 | transfer | channel-20 |
| kaiyo-1 | stargaze-1 | transfer | channel-7 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |