## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
chihuahua1yvejj22t78s2vfk7slty2d7fs5lkc8rns7uuy7
chihuahua15md2qvgma8lnvqv67w0umu2paqkqkheg6l5zfa
```

### Active IBC channels `chihuahua`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| chihuahua-1 | juno-1 | transfer | channel-11 |
| chihuahua-1 | gravity-bridge-3 | transfer | channel-15 |
| chihuahua-1 | secret-4 | transfer | channel-16 |
| chihuahua-1 | migaloo-1 | transfer | channel-39 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| chihuahua-1 | omniflixhub-1 | transfer | channel-17 |
| chihuahua-1 | osmosis-1 | wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52 | channel-73 |
| cosmoshub-4 | chihuahua-1 | transfer | channel-576 |
| gravity-bridge-3 | chihuahua-1 | transfer | channel-34 |
| migaloo-1 | chihuahua-1 | transfer | channel-10 |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| phoenix-1 | chihuahua-1 | wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au | channel-114 |
| phoenix-1 | chihuahua-1 | transfer | channel-98 |
| comdex-1 | chihuahua-1 | transfer | channel-61 |
| osmosis-1 | chihuahua-1 | transfer | channel-11348 |