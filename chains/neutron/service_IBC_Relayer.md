## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
neutron1yghndrffay859ma2ue4pa2cltw640vtaqx2096
neutron19l3pq6kg07fa4x7t88urx45t6gk2hl83v7gm4d
neutron1rgzemrwz54artpjmh6aee95zww8glnkxejec9s
```

### Active IBC channels `neutron`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| neutron-1 | celestia | transfer | channel-35 |
| neutron-1 | celestia | icacontroller-neutron1mtyp7tyq2rt4nk9qe3l3mmun5zy3k84s9ccndt6z7g6rwuyllqlq6kafzy.drop_PUMP | channel-6027 |
| axelar-dojo-1 | neutron-1 | transfer | channel-78 |
| celestia | neutron-1 | transfer | channel-8 |
| cosmoshub-4 | neutron-1 | transfer | channel-569 |
| noble-1 | neutron-1 | transfer | channel-18 |
| phoenix-1 | neutron-1 | transfer | channel-229 |