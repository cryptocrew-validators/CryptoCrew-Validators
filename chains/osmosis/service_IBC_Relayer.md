## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo12aeyaxq699k3f4d3733dl5pstw0ulplkjw69q7
osmo1yvejj22t78s2vfk7slty2d7fs5lkc8rnmszznw
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| osmosis-1 | quasar-1 | icqhost | channel-1142 |
| osmosis-1 | quasar-1 | icahost | channel-1144 |
| osmosis-1 | quasar-1 | icqhost | channel-1156 |
| osmosis-1 | quasar-1 | icahost | channel-1162 |
| osmosis-1 | quasar-1 | icqhost | channel-1172 |
| osmosis-1 | quasar-1 | icahost | channel-1176 |
| osmosis-1 | crescent-1 | transfer | channel-297 |
| osmosis-1 | agoric-3 | transfer | channel-320 |
| osmosis-1 | stride-1 | transfer | channel-326 |
| osmosis-1 | teritori-1 | transfer | channel-362 |
| osmosis-1 | quicksilver-2 | transfer | channel-522 |
| osmosis-1 | quasar-1 | transfer | channel-688 |
| osmosis-1 | quasar-1 | icqhost | channel-705 |
| osmosis-1 | quasar-1 | icqhost | channel-710 |
| osmosis-1 | quasar-1 | icqhost | channel-712 |
| osmosis-1 | quasar-1 | icahost | channel-735 |
| osmosis-1 | quasar-1 | icahost | channel-744 |
| osmosis-1 | quasar-1 | icahost | channel-746 |
| osmosis-1 | pacific-1 | transfer | channel-782 |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| osmosis-1 | lum-network-1 | transfer | channel-115 |
| osmosis-1 | injective-1 | transfer | channel-122 |
| osmosis-1 | vidulum-1 | transfer | channel-124 |
| osmosis-1 | gravity-bridge-3 | transfer | channel-144 |
| osmosis-1 | juno-1 | transfer | channel-168 |
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
| osmosis-1 | omniflixhub-1 | transfer | channel-199 |
| osmosis-1 | core-1 | transfer | channel-4 |
| osmosis-1 | comdex-1 | transfer | channel-87 |
| agoric-3 | osmosis-1 | transfer | channel-1 |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| crescent-1 | osmosis-1 | transfer | channel-9 |
| mars-1 | osmosis-1 | transfer | channel-1 |
| quasar-1 | osmosis-1 | transfer | channel-1 |
| quasar-1 | osmosis-1 | wasm.quasar1kj8q8g2pmhnagmfepp9jh9g2mda7gzd0m5zdq0s08ulvac8ck4dq9ykfps | channel-32 |
| quasar-1 | osmosis-1 | wasm.quasar1ma0g752dl0yujasnfs9yrk6uew7d0a2zrgvg62cfnlfftu2y0egqx8e7fv | channel-33 |
| quasar-1 | osmosis-1 | wasm.quasar1ery8l6jquynn9a4cz2pff6khg8c68f7urt33l5n9dng2cwzz4c4qxhm6a2 | channel-35 |
| quasar-1 | osmosis-1 | wasm.quasar1l468h9metf7m8duvay5t4fk2gp0xl94h94f3e02mfz4353de2ykqh6rcts | channel-38 |
| quasar-1 | osmosis-1 | wasm.quasar1jgn70d6pf7fqtjke0q63luc6tf7kcavdty67gvfpqhwwsx52xmjq7kd34f | channel-40 |
| quasar-1 | osmosis-1 | wasm.quasar1ch4s3kkpsgvykx5vtz2hsca4gz70yks5v55nqcfaj7mgsxjsqypsxqtx2a | channel-42 |
| quicksilver-2 | osmosis-1 | transfer | channel-2 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| teritori-1 | osmosis-1 | transfer | channel-0 |
| axelar-dojo-1 | osmosis-1 | transfer | channel-3 |
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
| lum-network-1 | osmosis-1 | transfer | channel-2 |
| lum-network-1 | osmosis-1 | transfer | channel-3 |
| migaloo-1 | osmosis-1 | transfer | channel-5 |
| odin-mainnet-freya | osmosis-1 | transfer | channel-3 |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| phoenix-1 | osmosis-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-26 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| secret-4 | osmosis-1 | wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4 | channel-44 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |
| vidulum-1 | osmosis-1 | transfer | channel-0 |
| comdex-1 | osmosis-1 | transfer | channel-1 |
| core-1 | osmosis-1 | transfer | channel-6 |
| omniflixhub-1 | osmosis-1 | transfer | channel-1 |