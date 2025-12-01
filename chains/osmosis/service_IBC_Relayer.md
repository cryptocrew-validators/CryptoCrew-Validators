## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | injective-1 | transfer | channel-122 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| injective-1 | osmosis-1 | transfer | channel-8 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| sommelier-3 | osmosis-1 | transfer | channel-0 |