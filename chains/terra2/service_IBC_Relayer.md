## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
terra1yvejj22t78s2vfk7slty2d7fs5lkc8rn40tj8u
terra1yghndrffay859ma2ue4pa2cltw640vtazaedaa
```

### Active IBC channels `terra2`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| phoenix-1 | osmosis-1 | transfer | channel-1 |
| phoenix-1 | chihuahua-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-114 |
| phoenix-1 | chihuahua-1 | transfer | channel-98 |
| phoenix-1 | neutron-1 | transfer | channel-229 |
| kaiyo-1 | phoenix-1 | transfer | channel-4 |
| kaiyo-1 | phoenix-1 | transfer | channel-43 |
| osmosis-1 | phoenix-1 | transfer | channel-341 |