## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
secret1yghndrffay859ma2ue4pa2cltw640vtaxuhyzp
secret15md2qvgma8lnvqv67w0umu2paqkqkhegm0d94r
secret1yvejj22t78s2vfk7slty2d7fs5lkc8rn3w9mcq
```

### Active IBC channels `secretnetwork`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| secret-4 | neutron-1 | transfer | channel-144 |
| secret-4 | cosmoshub-4 | transfer | channel-0 |
| secret-4 | osmosis-1 | transfer | channel-1 |
| secret-4 | kaiyo-1 | transfer | channel-22 |
| secret-4 | osmosis-1 | wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4 | channel-44 |
| neutron-1 | secret-4 | transfer | channel-1551 |
| chihuahua-1 | secret-4 | transfer | channel-16 |
| migaloo-1 | secret-4 | transfer | channel-4 |
| osmosis-1 | secret-4 | transfer | channel-88 |