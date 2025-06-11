## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
dydx12aeyaxq699k3f4d3733dl5pstw0ulplknv83km
dydx18hx3fcqrvynx9vvpvyv5qym82xz4suw5elaklh
```

### Active IBC channels `dydx`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| dydx-mainnet-1 | osmosis-1 | transfer | channel-3 |
| osmosis-1 | dydx-mainnet-1 | transfer | channel-6787 |