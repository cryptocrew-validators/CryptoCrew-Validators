## Live Peers
Peer lists can be used to sync a node as an alternative to addressbook files. Find live peers for `dydx-mainnet-1` below. All peers are checked for open P2P slots.


```sh

```

- last updated: Sat Aug 16 2025 11:14:47
- chain id: `dydx-mainnet-1`
- available peers: 2

## Instructions
```sh
# Update persistent_peers in $HOME/.dydxprotocol/config/config.toml

PEERS=
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"\"/" $HOME/.dydxprotocol/config/config.toml
```
