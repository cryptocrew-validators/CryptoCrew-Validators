## Live Peers
Peer lists can be used to sync a node as an alternative to addressbook files. Find live peers for `osmosis-1` below. All peers are checked for open P2P slots.


```sh

```

- last updated: Wed Jan 22 2025 13:54:45
- chain id: `osmosis-1`
- available peers: 2

## Instructions
```sh
# Update persistent_peers in $HOME/.osmosisd/config/config.toml

PEERS=
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"\"/" $HOME/.osmosisd/config/config.toml
```
