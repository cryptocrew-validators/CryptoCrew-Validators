## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
inj1jd7me7u2hew8cr8422m9yvgldhpv70l0gmhzpv
inj10hvldghaqvsedplt3utxffs34ylss5w8chwgfp
inj1nsd5f7vek8skzqhwxl6vfp07ee893aw3q50qrm
```

### Active IBC channels `injective`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| injective-1 | noble-1 | transfer | channel-148 |
| injective-1 | celestia | transfer | channel-152 |
| injective-1 | osmosis-1 | transfer | channel-8 |
| celestia | injective-1 | transfer | channel-7 |
| noble-1 | injective-1 | transfer | channel-31 |
| cosmoshub-4 | injective-1 | transfer | channel-220 |
| osmosis-1 | injective-1 | transfer | channel-122 |