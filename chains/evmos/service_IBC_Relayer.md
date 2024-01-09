## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
evmos1je8d8g73zrmp79fugdm3gn0a326ar5php3ll8j
```

### Active IBC channels `evmos`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| evmos_9001-2 | injective-1 | transfer | channel-10 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-17 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-18 |
| evmos_9001-2 | cosmoshub-4 | transfer | channel-3 |
| evmos_9001-2 | juno-1 | transfer | channel-5 |
| cosmoshub-4 | evmos_9001-2 | transfer | channel-292 |
| injective-1 | evmos_9001-2 | transfer | channel-83 |
| juno-1 | evmos_9001-2 | transfer | channel-70 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-22 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-23 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| gravity-bridge-3 | evmos_9001-2 | transfer | channel-65 |
| juno-1 | evmos_9001-2 | wasm.juno1zh4d42vxl9nv26htvu28k86vmy0tfusngdlknk7z37mkylkke2lslqzv6m | channel-205 |