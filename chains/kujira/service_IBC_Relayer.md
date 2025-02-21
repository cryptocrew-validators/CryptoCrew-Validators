## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
kujira1yvejj22t78s2vfk7slty2d7fs5lkc8rnzrn2gk
kujira1yghndrffay859ma2ue4pa2cltw640vta43p4jh
```

### Active IBC channels `kujira`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| kaiyo-1 | migaloo-1 | transfer | channel-58 |
| kaiyo-1 | neutron-1 | transfer | channel-75 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| phoenix-1 | kaiyo-1 | transfer | channel-10 |
| secret-4 | kaiyo-1 | transfer | channel-22 |
| stargaze-1 | kaiyo-1 | transfer | channel-49 |