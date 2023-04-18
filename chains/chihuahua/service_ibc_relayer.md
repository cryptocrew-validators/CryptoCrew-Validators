## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)


### Active IBC channels `chihuahua`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| chihuahua-1 | secret-4 | transfer | channel-16 |
| chihuahua-1 | juno-1 | transfer | channel-11 |
| chihuahua-1 | omniflixhub-1 | transfer | channel-17 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| secret-4 | chihuahua-1 | transfer | channel-11 |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |