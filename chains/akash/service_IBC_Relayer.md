## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
akash12aeyaxq699k3f4d3733dl5pstw0ulplkhwyj0k
akash1vh9d09ez64kxg3c9cekqj9em946evtwjf0mr2p
akash18hx3fcqrvynx9vvpvyv5qym82xz4suw5aa74x6
```

### Active IBC channels `akash`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| akashnet-2 | kava_2222-10 | transfer | channel-37 |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| kava_2222-10 | akashnet-2 | transfer | channel-5 |