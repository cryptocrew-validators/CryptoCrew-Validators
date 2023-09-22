## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
nolus12aeyaxq699k3f4d3733dl5pstw0ulplkv9e25f
```

### Active IBC channels `nolus`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| pirin-1 | osmosis-1 | transfer | channel-0 |
| pirin-1 | osmosis-1 | icacontroller-nolus17nynutepxhcmc97kmw8vqyrqcdecvpckh35nj5rkch6kjkc37ftqxxmnws.0 | channel-80 |
| osmosis-1 | pirin-1 | icahost | channel-1213 |
| osmosis-1 | pirin-1 | transfer | channel-783 |