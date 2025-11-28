## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo12aeyaxq699k3f4d3733dl5pstw0ulplkjw69q7
osmo1qp2jfwdez8f69h470ex9rtcd6truqqg9p2fz38
osmo18hx3fcqrvynx9vvpvyv5qym82xz4suw5caqzfj
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | stride-1 | transfer | channel-326 |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| celestia | osmosis-1 | transfer | channel-2 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| sommelier-3 | osmosis-1 | transfer | channel-0 |