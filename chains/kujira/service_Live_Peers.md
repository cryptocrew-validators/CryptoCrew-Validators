## Live Peers
Peer lists can be used to sync a node as an alternative to addressbook files. Find live peers for `kaiyo-1` below. All peers are checked for open P2P slots.


```sh

```

- last updated: Thu May 30 2024 11:24:48
- chain id: `kaiyo-1`
- available peers: 2

## Instructions
```sh
# Update persistent_peers in $HOME/.kujira/config/config.toml

PEERS=
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"\"/" $HOME/.kujira/config/config.toml
```
