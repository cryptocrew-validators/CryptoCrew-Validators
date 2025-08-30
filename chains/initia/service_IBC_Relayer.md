## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
init1yghndrffay859ma2ue4pa2cltw640vta20r75l
init16m48j88mlw2smhc8nyurznt4jl9nqgyqx5njuj
```

### Active IBC channels `initia`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| interwoven-1 | neutron-1 | icahost | channel-76 |
| interwoven-1 | osmosis-1 | transfer | channel-68 |
| neutron-1 | interwoven-1 | icacontroller-neutron1ypfa88sj0n0cqzyv3mh32nqke38xul3cye68c9jyq0y73n4z67zslvr824.drop_PUMP | channel-7028 |