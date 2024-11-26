## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
cosmos1yghndrffay859ma2ue4pa2cltw640vtayerdla
cosmos1f269n4mrg0s8tqveny9huulyamvdv97n094dgm
cosmos19l3pq6kg07fa4x7t88urx45t6gk2hl83gppe02
cosmos19c5dtp3kxl92wpeqpk8pf06rsqqggz935nlrpy
cosmos12aeyaxq699k3f4d3733dl5pstw0ulplk64f4kv
cosmos18hx3fcqrvynx9vvpvyv5qym82xz4suw5sxnjlq
```

### Active IBC channels `cosmoshub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| cosmoshub-4 | kava_2222-10 | transfer | channel-277 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| kava_2222-10 | cosmoshub-4 | transfer | channel-0 |
| juno-1 | cosmoshub-4 | transfer | channel-1 |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| lum-network-1 | cosmoshub-4 | transfer | channel-12 |
| phoenix-1 | cosmoshub-4 | transfer | channel-0 |
| secret-4 | cosmoshub-4 | transfer | channel-0 |