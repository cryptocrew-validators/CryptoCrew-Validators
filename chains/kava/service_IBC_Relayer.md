## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
kava12aeyaxq699k3f4d3733dl5pstw0ulplkxqagqt
kava18hx3fcqrvynx9vvpvyv5qym82xz4suw5vn80f8
```

### Active IBC channels `kava`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | kava_2222-10 | transfer | channel-277 |
| phoenix-1 | kava_2222-10 | transfer | channel-272 |