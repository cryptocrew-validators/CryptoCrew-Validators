## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
migaloo15md2qvgma8lnvqv67w0umu2paqkqkheg57ska3
```

### Active IBC channels `migaloo`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| migaloo-1 | phoenix-1 | transfer | channel-0 |
| migaloo-1 | juno-1 | transfer | channel-1 |
| migaloo-1 | chihuahua-1 | transfer | channel-10 |
| migaloo-1 | phoenix-1 | transfer | channel-2 |
| migaloo-1 | injective-1 | transfer | channel-3 |
| migaloo-1 | secret-4 | transfer | channel-4 |
| migaloo-1 | osmosis-1 | transfer | channel-5 |
| migaloo-1 | kaiyo-1 | transfer | channel-8 |
| chihuahua-1 | migaloo-1 | transfer | channel-39 |
| injective-1 | migaloo-1 | transfer | channel-102 |
| juno-1 | migaloo-1 | transfer | channel-210 |
| kaiyo-1 | migaloo-1 | transfer | channel-58 |
| osmosis-1 | migaloo-1 | transfer | channel-642 |
| phoenix-1 | migaloo-1 | transfer | channel-86 |
| phoenix-1 | migaloo-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-87 |
| secret-4 | migaloo-1 | transfer | channel-57 |