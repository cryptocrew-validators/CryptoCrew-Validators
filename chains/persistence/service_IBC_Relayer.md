## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
persistence15md2qvgma8lnvqv67w0umu2paqkqkheghxllxm
```

### Active IBC channels `persistence`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| core-1 | comdex-1 | transfer | channel-71 |
| core-1 | gravity-bridge-3 | transfer | channel-38 |
| comdex-1 | core-1 | transfer | channel-57 |
| gravity-bridge-3 | core-1 | transfer | channel-24 |