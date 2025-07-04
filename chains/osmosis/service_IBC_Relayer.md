## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
osmo1yghndrffay859ma2ue4pa2cltw640vtavzsaf0
osmo1f269n4mrg0s8tqveny9huulyamvdv97n87xa7f
osmo1vh9d09ez64kxg3c9cekqj9em946evtwjv0959f
osmo19c5dtp3kxl92wpeqpk8pf06rsqqggz93ugvnhk
osmo12aeyaxq699k3f4d3733dl5pstw0ulplkjw69q7
osmo1qp2jfwdez8f69h470ex9rtcd6truqqg9p2fz38
osmo18hx3fcqrvynx9vvpvyv5qym82xz4suw5caqzfj
osmo16m48j88mlw2smhc8nyurznt4jl9nqgyqqeq3pz
osmo145u97e5uwuventlwesghqgvx39wx6q8es7m0gk
osmo1ld3met27u97dlu8mfs7xjnj35qjakd6zntyhhv
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | migaloo-1 | transfer | channel-642 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |
| osmosis-1 | neutron-1 | transfer | channel-874 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| osmosis-1 | noble-1 | transfer | channel-750 |
| osmosis-1 | kava_2222-10 | transfer | channel-143 |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| osmosis-1 | stride-1 | transfer | channel-326 |
| osmosis-1 | dydx-mainnet-1 | transfer | channel-6787 |
| osmosis-1 | celestia | transfer | channel-6994 |
| osmosis-1 | pirin-1 | transfer | channel-783 |
| osmosis-1 | interwoven-1 | transfer | channel-102122 |
| osmosis-1 | axelar-dojo-1 | transfer | channel-208 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| migaloo-1 | osmosis-1 | transfer | channel-5 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| elys-1 | osmosis-1 | transfer | channel-6 |
| noble-1 | osmosis-1 | transfer | channel-1 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| agoric-3 | osmosis-1 | transfer | channel-1 |
| celestia | osmosis-1 | transfer | channel-2 |
| dydx-mainnet-1 | osmosis-1 | transfer | channel-3 |
| axelar-dojo-1 | osmosis-1 | transfer | channel-3 |
| laozi-mainnet | osmosis-1 | transfer | channel-83 |