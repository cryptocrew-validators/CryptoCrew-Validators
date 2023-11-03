## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
band16m48j88mlw2smhc8nyurznt4jl9nqgyq3dnr0c
```

### Active IBC channels `bandchain`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| laozi-mainnet | osmosis-1 | transfer | channel-83 |
| laozi-mainnet | comdex-1 | oracle | channel-96 |
| comdex-1 | laozi-mainnet | bandoracleV1 | channel-43 |
| osmosis-1 | laozi-mainnet | transfer | channel-148 |