## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- `[hermes (ibc-rust)](https://github.com/informalsystems/hermes)` relayer by [Informal Systems](https://github.com/informalsystems)
- `[rly (ibc-go)](https://github.com/cosmos/relayer)` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Wallets: evmos1je8d8g73zrmp79fugdm3gn0a326ar5php3ll8j, evmos1nsd5f7vek8skzqhwxl6vfp07ee893aw3guf2tt


### Active IBC channels `evmos`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |
| evmos_9001-2 | secret-4 | transfer | channel-15 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| evmos_9001-2 | injective-1 | transfer | channel-10 |
| evmos_9001-2 | cosmoshub-4 | transfer | channel-3 |
| evmos_9001-2 | juno-1 | transfer | channel-41 |
| evmos_9001-2 | juno-1 | transfer | channel-5 |
| evmos_9001-2 | gravity-bridge-3 | transfer | channel-8 |
| secret-4 | evmos_9001-2 | transfer | channel-18 |
| cosmoshub-4 | evmos_9001-2 | transfer | channel-292 |
| injective-1 | evmos_9001-2 | transfer | channel-83 |
| juno-1 | evmos_9001-2 | wasm.juno1zh4d42vxl9nv26htvu28k86vmy0tfusngdlknk7z37mkylkke2lslqzv6m | channel-205 |
| juno-1 | evmos_9001-2 | transfer | channel-70 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |