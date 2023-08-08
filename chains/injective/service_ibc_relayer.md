## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts `injective`:
```
inj1nsd5f7vek8skzqhwxl6vfp07ee893aw3q50qrm
inj14nhzw3lnsdkeq5clzqms586mxrf2x74y6skne0
```

### Active IBC channels `injective`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| injective-1 | laozi-mainnet | oracle | channel-3 |
| injective-1 | migaloo-1 | transfer | channel-102 |
| injective-1 | cosmoshub-4 | transfer | channel-1 |
| injective-1 | osmosis-1 | transfer | channel-8 |
| injective-1 | core-1 | transfer | channel-82 |
| injective-1 | evmos_9001-2 | transfer | channel-83 |
| laozi-mainnet | injective-1 | oracle | channel-7 |
| migaloo-1 | injective-1 | transfer | channel-3 |
| core-1 | injective-1 | transfer | channel-41 |
| cosmoshub-4 | injective-1 | transfer | channel-220 |
| evmos_9001-2 | injective-1 | transfer | channel-10 |
| osmosis-1 | injective-1 | transfer | channel-122 |