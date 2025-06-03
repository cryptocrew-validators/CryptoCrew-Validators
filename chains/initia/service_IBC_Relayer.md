## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
init1yghndrffay859ma2ue4pa2cltw640vta20r75l
```

### Active IBC channels `initia`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| interwoven-1 | neutron-1 | icahost | channel-76 |
| neutron-1 | interwoven-1 | icacontroller-neutron1wk9aamp2hy2hd90jhsu6qj7grd6tde43nzuvcchmfvj2880ya5ss9qxdp7.DROP | channel-7029 |