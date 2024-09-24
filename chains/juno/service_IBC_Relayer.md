## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
juno15md2qvgma8lnvqv67w0umu2paqkqkheg0c6h0r
```

### Active IBC channels `juno`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| juno-1 | stargaze-1 | transfer | channel-20 |
| juno-1 | kaiyo-1 | transfer | channel-88 |
| juno-1 | kaiyo-1 | wasm.juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg | channel-97 |
| chihuahua-1 | juno-1 | transfer | channel-11 |
| kaiyo-1 | juno-1 | transfer | channel-2 |
| stargaze-1 | juno-1 | transfer | channel-5 |