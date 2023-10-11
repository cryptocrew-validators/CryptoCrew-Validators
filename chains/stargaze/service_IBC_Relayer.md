## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
stars1yvejj22t78s2vfk7slty2d7fs5lkc8rn8hx0wd
stars15md2qvgma8lnvqv67w0umu2paqkqkhegdkw3rw
```

### Active IBC channels `stargaze`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| stargaze-1 | osmosis-1 | transfer | channel-0 |
| stargaze-1 | kaiyo-1 | transfer | channel-49 |
| stargaze-1 | juno-1 | transfer | channel-5 |
| gravity-bridge-3 | stargaze-1 | transfer | channel-7 |
| juno-1 | stargaze-1 | transfer | channel-20 |
| kaiyo-1 | stargaze-1 | transfer | channel-7 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |