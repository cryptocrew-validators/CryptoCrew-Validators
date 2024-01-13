## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
celestia16m48j88mlw2smhc8nyurznt4jl9nqgyqegz3da
celestia1qp2jfwdez8f69h470ex9rtcd6truqqg9cmtzac
celestia1yghndrffay859ma2ue4pa2cltw640vta4nja9s
celestia1f269n4mrg0s8tqveny9huulyamvdv97n70yajk
```

### Active IBC channels `celestia`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| celestia | osmosis-1 | transfer | channel-2 |
| celestia | neutron-1 | transfer | channel-8 |
| osmosis-1 | celestia | transfer | channel-6994 |
| neutron-1 | celestia | transfer | channel-35 |