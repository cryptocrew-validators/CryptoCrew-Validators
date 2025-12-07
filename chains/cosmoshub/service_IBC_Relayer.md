## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
cosmos1yvejj22t78s2vfk7slty2d7fs5lkc8rnnt3j9u
cosmos12aeyaxq699k3f4d3733dl5pstw0ulplk64f4kv
cosmos18hx3fcqrvynx9vvpvyv5qym82xz4suw5sxnjlq
```

### Active IBC channels `cosmoshub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | phoenix-1 | transfer | channel-339 |
| cosmoshub-4 | kava_2222-10 | transfer | channel-277 |
| phoenix-1 | cosmoshub-4 | transfer | channel-0 |
| kava_2222-10 | cosmoshub-4 | transfer | channel-0 |