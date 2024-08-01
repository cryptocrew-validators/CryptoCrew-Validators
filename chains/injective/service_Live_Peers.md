## Live Peers
Peer lists can be used to sync a node as an alternative to addressbook files. Find live peers for `injective-1` below. All peers are checked for open P2P slots.


```sh

```

- last updated: Thu Aug 01 2024 05:03:55
- chain id: `injective-1`
- available peers: 2

## Instructions
```sh
# Update persistent_peers in $HOME/.injectived/config/config.toml

PEERS=
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"\"/" $HOME/.injectived/config/config.toml
```
