## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
agoric12aeyaxq699k3f4d3733dl5pstw0ulplkggt2x6
agoric18hx3fcqrvynx9vvpvyv5qym82xz4suw5zm3d0k
```

### Active IBC channels `agoric`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| agoric-3 | kava_2222-10 | transfer | channel-63 |
| kava_2222-10 | agoric-3 | transfer | channel-133 |