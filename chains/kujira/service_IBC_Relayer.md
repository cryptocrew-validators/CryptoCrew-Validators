## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
kujira1yvejj22t78s2vfk7slty2d7fs5lkc8rnzrn2gk
kujira15md2qvgma8lnvqv67w0umu2paqkqkheggzm594
kujira1yghndrffay859ma2ue4pa2cltw640vta43p4jh
```

### Active IBC channels `kujira`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| kaiyo-1 | juno-1 | transfer | channel-1 |
| kaiyo-1 | secret-4 | transfer | channel-10 |
| kaiyo-1 | juno-1 | transfer | channel-2 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-22 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-23 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| kaiyo-1 | juno-1 | transfer | channel-31 |
| kaiyo-1 | phoenix-1 | transfer | channel-36 |
| kaiyo-1 | phoenix-1 | transfer | channel-4 |
| kaiyo-1 | phoenix-1 | transfer | channel-43 |
| kaiyo-1 | secret-4 | transfer | channel-44 |
| kaiyo-1 | phoenix-1 | transfer | channel-5 |
| kaiyo-1 | gravity-bridge-3 | transfer | channel-50 |
| kaiyo-1 | injective-1 | transfer | channel-54 |
| kaiyo-1 | migaloo-1 | transfer | channel-58 |
| kaiyo-1 | stargaze-1 | transfer | channel-7 |
| kaiyo-1 | comdex-1 | transfer | channel-18 |
| kaiyo-1 | omniflixhub-1 | transfer | channel-70 |
| kaiyo-1 | neutron-1 | transfer | channel-75 |
| cosmoshub-4 | kaiyo-1 | transfer | channel-343 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-17 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-18 |
| gravity-bridge-3 | kaiyo-1 | transfer | channel-107 |
| injective-1 | kaiyo-1 | transfer | channel-98 |
| juno-1 | kaiyo-1 | transfer | channel-87 |
| juno-1 | kaiyo-1 | transfer | channel-88 |
| juno-1 | kaiyo-1 | wasm.juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg | channel-97 |
| migaloo-1 | kaiyo-1 | transfer | channel-8 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| phoenix-1 | kaiyo-1 | transfer | channel-10 |
| phoenix-1 | kaiyo-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-28 |
| secret-4 | kaiyo-1 | transfer | channel-22 |
| secret-4 | kaiyo-1 | wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4 | channel-46 |
| stargaze-1 | kaiyo-1 | transfer | channel-49 |
| omniflixhub-1 | kaiyo-1 | transfer | channel-26 |
| neutron-1 | kaiyo-1 | transfer | channel-3 |