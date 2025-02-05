## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
cosmos1yghndrffay859ma2ue4pa2cltw640vtayerdla
cosmos1f269n4mrg0s8tqveny9huulyamvdv97n094dgm
cosmos19l3pq6kg07fa4x7t88urx45t6gk2hl83gppe02
cosmos19c5dtp3kxl92wpeqpk8pf06rsqqggz935nlrpy
```

### Active IBC channels `cosmoshub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | neutron-1 | transfer | channel-569 |
| cosmoshub-4 | dungeon-1 | transfer | channel-1200 |
| cosmoshub-4 | comdex-1 | provider | channel-1263 |
| cosmoshub-4 | elys-1 | provider | channel-1265 |
| cosmoshub-4 | elys-1 | transfer | channel-1266 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| juno-1 | cosmoshub-4 | transfer | channel-1 |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| lum-network-1 | cosmoshub-4 | transfer | channel-12 |
| phoenix-1 | cosmoshub-4 | transfer | channel-0 |
| secret-4 | cosmoshub-4 | transfer | channel-0 |
| neutron-1 | cosmoshub-4 | transfer | channel-1 |
| neutron-1 | cosmoshub-4 | wasm.neutron1gf7zyyty00exym9q0mpt2kl7qzznuu94ruguafpx9eveplpv9j6sendvld | channel-6292 |
| neutron-1 | cosmoshub-4 | wasm.neutron1jqk87ra6q6rek6d4z74neqe0e0m85khfmwn5fuefz75df75qf4fs3xuj4q | channel-6306 |
| elys-1 | cosmoshub-4 | consumer | channel-0 |
| elys-1 | cosmoshub-4 | transfer | channel-1 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| kava_2222-10 | cosmoshub-4 | transfer | channel-0 |