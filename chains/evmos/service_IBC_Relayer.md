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
| cosmoshub-4 | evmos_9001-2 | transfer | channel-292 |
| gravity-bridge-3 | evmos_9001-2 | transfer | channel-65 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |