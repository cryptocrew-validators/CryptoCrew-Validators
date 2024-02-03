## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
persistence15md2qvgma8lnvqv67w0umu2paqkqkheghxllxm
```

### Active IBC channels `persistence`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| core-1 | cosmoshub-4 | transfer | channel-24 |
| core-1 | juno-1 | transfer | channel-37 |
| core-1 | gravity-bridge-3 | transfer | channel-38 |
| core-1 | cosmoshub-4 | icacontroller-lscosmos_pstake_reward_account | channel-53 |
| core-1 | osmosis-1 | transfer | channel-6 |
| core-1 | comdex-1 | transfer | channel-71 |
| comdex-1 | core-1 | transfer | channel-57 |
| gravity-bridge-3 | core-1 | transfer | channel-24 |
| juno-1 | core-1 | transfer | channel-33 |
| osmosis-1 | core-1 | transfer | channel-4 |