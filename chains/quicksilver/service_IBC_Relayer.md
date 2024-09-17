## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
quick12aeyaxq699k3f4d3733dl5pstw0ulplk33e807
```

### Active IBC channels `quicksilver`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| quicksilver-2 | osmosis-1 | transfer | channel-2 |
| quicksilver-2 | osmosis-1 | icacontroller-osmosis-1.deposit | channel-25 |
| osmosis-1 | quicksilver-2 | transfer | channel-522 |