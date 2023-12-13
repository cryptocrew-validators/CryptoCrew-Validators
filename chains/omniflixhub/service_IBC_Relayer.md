## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
omniflix15md2qvgma8lnvqv67w0umu2paqkqkhegy5g4lp
```

### Active IBC channels `omniflixhub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| omniflixhub-1 | cosmoshub-4 | transfer | channel-0 |
| omniflixhub-1 | osmosis-1 | transfer | channel-1 |
| omniflixhub-1 | cosmoshub-4 | transfer | channel-12 |
| omniflixhub-1 | juno-1 | transfer | channel-20 |
| omniflixhub-1 | kaiyo-1 | transfer | channel-26 |
| chihuahua-1 | omniflixhub-1 | transfer | channel-17 |
| cosmoshub-4 | omniflixhub-1 | transfer | channel-306 |
| juno-1 | omniflixhub-1 | transfer | channel-78 |
| kaiyo-1 | omniflixhub-1 | transfer | channel-70 |
| osmosis-1 | omniflixhub-1 | transfer | channel-199 |