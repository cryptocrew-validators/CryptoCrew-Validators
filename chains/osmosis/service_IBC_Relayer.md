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
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
osmo1yghndrffay859ma2ue4pa2cltw640vtavzsaf0
osmo1f269n4mrg0s8tqveny9huulyamvdv97n87xa7f
osmo1vh9d09ez64kxg3c9cekqj9em946evtwjv0959f
osmo19c5dtp3kxl92wpeqpk8pf06rsqqggz93ugvnhk
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | kava_2222-10 | transfer | channel-143 |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| osmosis-1 | quasar-1 | icqhost | channel-1142 |
| osmosis-1 | quasar-1 | icqhost | channel-1156 |
| osmosis-1 | quasar-1 | icqhost | channel-1172 |
| osmosis-1 | stride-1 | transfer | channel-326 |
| osmosis-1 | quicksilver-2 | transfer | channel-522 |
| osmosis-1 | mars-1 | transfer | channel-557 |
| osmosis-1 | dydx-mainnet-1 | transfer | channel-6787 |
| osmosis-1 | quasar-1 | transfer | channel-688 |
| osmosis-1 | celestia | transfer | channel-6994 |
| osmosis-1 | quicksilver-2 | icahost | channel-701 |
| osmosis-1 | quasar-1 | icqhost | channel-705 |
| osmosis-1 | quasar-1 | icqhost | channel-710 |
| osmosis-1 | quasar-1 | icqhost | channel-712 |
| osmosis-1 | pirin-1 | transfer | channel-783 |
| osmosis-1 | laozi-mainnet | transfer | channel-148 |
| osmosis-1 | axelar-dojo-1 | transfer | channel-208 |
| osmosis-1 | comdex-1 | transfer | channel-87 |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| osmosis-1 | lum-network-1 | transfer | channel-115 |
| osmosis-1 | injective-1 | transfer | channel-122 |
| osmosis-1 | vidulum-1 | transfer | channel-124 |
| osmosis-1 | gravity-bridge-3 | transfer | channel-144 |
| osmosis-1 | juno-1 | transfer | channel-169 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | phoenix-1 | transfer | channel-251 |
| osmosis-1 | odin-mainnet-freya | transfer | channel-258 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| osmosis-1 | phoenix-1 | transfer | channel-341 |
| osmosis-1 | juno-1 | transfer | channel-42 |
| osmosis-1 | secret-4 | transfer | channel-476 |
| osmosis-1 | canto_7700-1 | transfer | channel-550 |
| osmosis-1 | migaloo-1 | transfer | channel-642 |
| osmosis-1 | bitsong-2b | transfer | channel-73 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |
| osmosis-1 | secret-4 | transfer | channel-88 |
| osmosis-1 | chihuahua-1 | transfer | channel-11348 |
| osmosis-1 | omniflixhub-1 | transfer | channel-199 |
| osmosis-1 | core-1 | transfer | channel-4 |
| osmosis-1 | neutron-1 | transfer | channel-874 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| osmosis-1 | noble-1 | transfer | channel-750 |
| kava_2222-10 | osmosis-1 | transfer | channel-1 |
| agoric-3 | osmosis-1 | transfer | channel-1 |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| celestia | osmosis-1 | transfer | channel-2 |
| crescent-1 | osmosis-1 | transfer | channel-9 |
| dydx-mainnet-1 | osmosis-1 | transfer | channel-3 |
| mars-1 | osmosis-1 | transfer | channel-1 |
| nois-1 | osmosis-1 | transfer | channel-37 |
| pirin-1 | osmosis-1 | transfer | channel-0 |
| quasar-1 | osmosis-1 | transfer | channel-1 |
| quicksilver-2 | osmosis-1 | transfer | channel-2 |
| quicksilver-2 | osmosis-1 | icacontroller-osmosis-1.deposit | channel-25 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| teritori-1 | osmosis-1 | transfer | channel-0 |
| axelar-dojo-1 | osmosis-1 | transfer | channel-3 |
| comdex-1 | osmosis-1 | transfer | channel-1 |
| laozi-mainnet | osmosis-1 | transfer | channel-83 |
| bitsong-2b | osmosis-1 | transfer | channel-0 |
| canto_7700-1 | osmosis-1 | transfer | channel-5 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| gravity-bridge-3 | osmosis-1 | transfer | channel-10 |
| injective-1 | osmosis-1 | transfer | channel-8 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-43 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-47 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| lum-network-1 | osmosis-1 | transfer | channel-3 |
| migaloo-1 | osmosis-1 | transfer | channel-5 |
| odin-mainnet-freya | osmosis-1 | transfer | channel-3 |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| phoenix-1 | osmosis-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-26 |
| phoenix-1 | osmosis-1 | wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x | channel-85 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| secret-4 | osmosis-1 | wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4 | channel-44 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |
| vidulum-1 | osmosis-1 | transfer | channel-0 |
| chihuahua-1 | osmosis-1 | wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52 | channel-73 |
| core-1 | osmosis-1 | transfer | channel-6 |
| omniflixhub-1 | osmosis-1 | transfer | channel-1 |
| neutron-1 | osmosis-1 | transfer | channel-10 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| noble-1 | osmosis-1 | transfer | channel-1 |