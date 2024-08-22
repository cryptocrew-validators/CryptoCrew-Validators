## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
evmos1je8d8g73zrmp79fugdm3gn0a326ar5php3ll8j
evmos1jd7me7u2hew8cr8422m9yvgldhpv70l0qn3gfu
evmos1qz5humuak45aj67hmy4at5hykfsvc8453dxyl7
```

### Active IBC channels `evmos`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| evmos_9001-2 | kava_2222-10 | transfer | channel-83 |
| cosmoshub-4 | evmos_9001-2 | transfer | channel-292 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| kava_2222-10 | evmos_9001-2 | transfer | channel-117 |