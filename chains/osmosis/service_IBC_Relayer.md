## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo16m48j88mlw2smhc8nyurznt4jl9nqgyqqeq3pz
osmo145u97e5uwuventlwesghqgvx39wx6q8es7m0gk
osmo1ld3met27u97dlu8mfs7xjnj35qjakd6zntyhhv
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | interwoven-1 | transfer | channel-102122 |
| osmosis-1 | axelar-dojo-1 | transfer | channel-208 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | juno-1 | transfer | channel-42 |
| osmosis-1 | migaloo-1 | transfer | channel-642 |
| osmosis-1 | secret-4 | transfer | channel-88 |
| axelar-dojo-1 | osmosis-1 | transfer | channel-3 |
| laozi-mainnet | osmosis-1 | transfer | channel-83 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |