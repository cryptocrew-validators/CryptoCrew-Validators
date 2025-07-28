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
osmo16m48j88mlw2smhc8nyurznt4jl9nqgyqqeq3pz
osmo145u97e5uwuventlwesghqgvx39wx6q8es7m0gk
osmo1ld3met27u97dlu8mfs7xjnj35qjakd6zntyhhv
osmo1yghndrffay859ma2ue4pa2cltw640vtavzsaf0
osmo1f269n4mrg0s8tqveny9huulyamvdv97n87xa7f
osmo1vh9d09ez64kxg3c9cekqj9em946evtwjv0959f
osmo19c5dtp3kxl92wpeqpk8pf06rsqqggz93ugvnhk
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| osmosis-1 | agoric-3 | transfer | channel-320 |
| osmosis-1 | stride-1 | transfer | channel-326 |
| osmosis-1 | teritori-1 | transfer | channel-362 |
| osmosis-1 | quicksilver-2 | transfer | channel-522 |
| osmosis-1 | dydx-mainnet-1 | transfer | channel-6787 |
| osmosis-1 | celestia | transfer | channel-6994 |
| osmosis-1 | pirin-1 | transfer | channel-783 |
| osmosis-1 | axelar-dojo-1 | transfer | channel-208 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| osmosis-1 | noble-1 | transfer | channel-750 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | phoenix-1 | transfer | channel-251 |
| osmosis-1 | migaloo-1 | transfer | channel-642 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |
| agoric-3 | osmosis-1 | transfer | channel-1 |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| celestia | osmosis-1 | transfer | channel-2 |
| dydx-mainnet-1 | osmosis-1 | transfer | channel-3 |
| pirin-1 | osmosis-1 | transfer | channel-0 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| axelar-dojo-1 | osmosis-1 | transfer | channel-3 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| elys-1 | osmosis-1 | transfer | channel-6 |
| noble-1 | osmosis-1 | transfer | channel-1 |