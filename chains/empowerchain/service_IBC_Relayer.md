## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

### Active IBC channels `empowerchain`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| empowerchain-1 | cosmoshub-4 | transfer | channel-0 |
| empowerchain-1 | osmosis-1 | transfer | channel-1 |
| empowerchain-1 | axelar-dojo-1 | transfer | channel-2 |
| axelar-dojo-1 | empowerchain-1 | transfer | channel-109 |
| cosmoshub-4 | empowerchain-1 | transfer | channel-621 |
| osmosis-1 | empowerchain-1 | transfer | channel-1411 |