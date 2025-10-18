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
cosmos1yvejj22t78s2vfk7slty2d7fs5lkc8rnnt3j9u
cosmos12aeyaxq699k3f4d3733dl5pstw0ulplk64f4kv
cosmos18hx3fcqrvynx9vvpvyv5qym82xz4suw5sxnjlq
```

### Active IBC channels `cosmoshub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| cosmoshub-4 | intento-1 | icahost | channel-1494 |
| cosmoshub-4 | phoenix-1 | transfer | channel-339 |
| cosmoshub-4 | kaiyo-1 | transfer | channel-343 |
| cosmoshub-4 | neutron-1 | transfer | channel-569 |
| cosmoshub-4 | kava_2222-10 | transfer | channel-277 |
| intento-1 | cosmoshub-4 | icacontroller-into154sh4gcax7eyu9pw389gy8pngx07ll30z44d84rh742xxlhv4f5sr68jlv | channel-6 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| juno-1 | cosmoshub-4 | transfer | channel-1 |
| phoenix-1 | cosmoshub-4 | transfer | channel-0 |
| neutron-1 | cosmoshub-4 | transfer | channel-1 |
| kava_2222-10 | cosmoshub-4 | transfer | channel-0 |