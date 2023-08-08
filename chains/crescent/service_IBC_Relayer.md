## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

### Active IBC channels `crescent`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| crescent-1 | osmosis-1 | transfer | channel-9 |
| crescent-1 | agoric-3 | transfer | channel-11 |
| akashnet-2 | crescent-1 | transfer | channel-70 |
| osmosis-1 | crescent-1 | transfer | channel-297 |
| agoric-3 | crescent-1 | transfer | channel-2 |