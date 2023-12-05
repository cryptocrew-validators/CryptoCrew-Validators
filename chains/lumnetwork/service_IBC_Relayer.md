## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
lum1yvejj22t78s2vfk7slty2d7fs5lkc8rnxpvmsg
```

### Active IBC channels `lumnetwork`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| lum-network-1 | cosmoshub-4 | transfer | channel-12 |
| lum-network-1 | osmosis-1 | transfer | channel-3 |
| cosmoshub-4 | lum-network-1 | transfer | channel-566 |
| osmosis-1 | lum-network-1 | transfer | channel-115 |