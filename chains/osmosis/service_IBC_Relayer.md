## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo1yghndrffay859ma2ue4pa2cltw640vtavzsaf0
osmo1f269n4mrg0s8tqveny9huulyamvdv97n87xa7f
osmo1vh9d09ez64kxg3c9cekqj9em946evtwjv0959f
osmo19c5dtp3kxl92wpeqpk8pf06rsqqggz93ugvnhk
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| osmosis-1 | noble-1 | transfer | channel-750 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| elys-1 | osmosis-1 | transfer | channel-6 |
| stride-1 | osmosis-1 | transfer | channel-5 |