## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
dym18hx3fcqrvynx9vvpvyv5qym82xz4suw5zml56w
```

### Active IBC channels `dymension`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| dymension_1100-1 | kava_2222-10 | transfer | channel-3 |
| secret-4 | dymension_1100-1 | transfer | channel-130 |
| kava_2222-10 | dymension_1100-1 | transfer | channel-144 |