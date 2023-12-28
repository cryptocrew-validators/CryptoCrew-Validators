## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
cre12aeyaxq699k3f4d3733dl5pstw0ulplk7a6srp
```

### Active IBC channels `crescent`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| crescent-1 | stride-1 | transfer | channel-29 |
| crescent-1 | akashnet-2 | transfer | channel-44 |
| akashnet-2 | crescent-1 | transfer | channel-70 |
| osmosis-1 | crescent-1 | transfer | channel-297 |
| stride-1 | crescent-1 | transfer | channel-51 |