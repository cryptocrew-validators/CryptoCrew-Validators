## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
terra1yghndrffay859ma2ue4pa2cltw640vtazaedaa
terra1yvejj22t78s2vfk7slty2d7fs5lkc8rn40tj8u
```

### Active IBC channels `terra2`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| phoenix-1 | neutron-1 | transfer | channel-229 |
| phoenix-1 | cosmoshub-4 | transfer | channel-0 |
| phoenix-1 | kaiyo-1 | transfer | channel-10 |