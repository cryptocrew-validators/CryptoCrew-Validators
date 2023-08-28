## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| osmosis-1 | injective-1 | transfer | channel-122 |
| osmosis-1 | gravity-bridge-3 | transfer | channel-144 |
| osmosis-1 | omniflixhub-1 | transfer | channel-199 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| osmosis-1 | core-1 | transfer | channel-4 |
| osmosis-1 | juno-1 | transfer | channel-42 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |
| osmosis-1 | comdex-1 | transfer | channel-87 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| comdex-1 | osmosis-1 | transfer | channel-1 |
| core-1 | osmosis-1 | transfer | channel-6 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| gravity-bridge-3 | osmosis-1 | transfer | channel-10 |
| injective-1 | osmosis-1 | transfer | channel-8 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-43 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-47 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| omniflixhub-1 | osmosis-1 | transfer | channel-1 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |