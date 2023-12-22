## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
comdex16m48j88mlw2smhc8nyurznt4jl9nqgyq0d3rw8
comdex15md2qvgma8lnvqv67w0umu2paqkqkheg79mw3g
```

### Active IBC channels `comdex`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| comdex-1 | osmosis-1 | transfer | channel-1 |
| comdex-1 | juno-1 | transfer | channel-18 |
| comdex-1 | kaiyo-1 | transfer | channel-31 |
| comdex-1 | cosmoshub-4 | transfer | channel-37 |
| comdex-1 | core-1 | transfer | channel-57 |
| comdex-1 | chihuahua-1 | transfer | channel-61 |
| osmosis-1 | comdex-1 | transfer | channel-87 |
| gravity-bridge-3 | comdex-1 | transfer | channel-112 |
| core-1 | comdex-1 | transfer | channel-71 |
| cosmoshub-4 | comdex-1 | transfer | channel-400 |
| juno-1 | comdex-1 | transfer | channel-36 |
| kaiyo-1 | comdex-1 | transfer | channel-18 |