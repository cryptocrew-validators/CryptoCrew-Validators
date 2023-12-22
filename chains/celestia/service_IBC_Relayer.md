## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
celestia1yghndrffay859ma2ue4pa2cltw640vta4nja9s
celestia1f269n4mrg0s8tqveny9huulyamvdv97n70yajk
celestia16m48j88mlw2smhc8nyurznt4jl9nqgyqegz3da
```

### Active IBC channels `celestia`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| celestia | neutron-1 | transfer | channel-8 |
| celestia | osmosis-1 | transfer | channel-2 |
| celestia | secret-4 | transfer | channel-14 |
| neutron-1 | celestia | transfer | channel-35 |
| osmosis-1 | celestia | transfer | channel-6994 |
| injective-1 | celestia | transfer | channel-152 |