## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
juno1yvejj22t78s2vfk7slty2d7fs5lkc8rn9ejfzq
juno15md2qvgma8lnvqv67w0umu2paqkqkheg0c6h0r
```

### Active IBC channels `juno`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| juno-1 | osmosis-1 | transfer | channel-0 |
| juno-1 | cosmoshub-4 | transfer | channel-1 |
| juno-1 | bitsong-2b | transfer | channel-17 |
| juno-1 | stargaze-1 | transfer | channel-20 |
| juno-1 | evmos_9001-2 | wasm.juno1zh4d42vxl9nv26htvu28k86vmy0tfusngdlknk7z37mkylkke2lslqzv6m | channel-205 |
| juno-1 | migaloo-1 | transfer | channel-210 |
| juno-1 | gravity-bridge-3 | transfer | channel-31 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-47 |
| juno-1 | secret-4 | transfer | channel-48 |
| juno-1 | evmos_9001-2 | transfer | channel-70 |
| juno-1 | phoenix-1 | transfer | channel-86 |
| juno-1 | kaiyo-1 | transfer | channel-87 |
| juno-1 | kaiyo-1 | transfer | channel-88 |
| juno-1 | kaiyo-1 | wasm.juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg | channel-97 |
| juno-1 | core-1 | transfer | channel-33 |
| juno-1 | comdex-1 | transfer | channel-36 |
| juno-1 | omniflixhub-1 | transfer | channel-78 |
| bitsong-2b | juno-1 | transfer | channel-5 |
| chihuahua-1 | juno-1 | transfer | channel-11 |
| cosmoshub-4 | juno-1 | transfer | channel-207 |
| evmos_9001-2 | juno-1 | transfer | channel-41 |
| evmos_9001-2 | juno-1 | transfer | channel-5 |
| gravity-bridge-3 | juno-1 | transfer | channel-8 |
| kaiyo-1 | juno-1 | transfer | channel-1 |
| kaiyo-1 | juno-1 | transfer | channel-2 |
| kaiyo-1 | juno-1 | transfer | channel-31 |
| migaloo-1 | juno-1 | transfer | channel-1 |
| osmosis-1 | juno-1 | transfer | channel-169 |
| osmosis-1 | juno-1 | transfer | channel-42 |
| phoenix-1 | juno-1 | transfer | channel-2 |
| secret-4 | juno-1 | transfer | channel-8 |
| stargaze-1 | juno-1 | transfer | channel-5 |
| comdex-1 | juno-1 | transfer | channel-18 |
| core-1 | juno-1 | transfer | channel-37 |
| omniflixhub-1 | juno-1 | transfer | channel-20 |