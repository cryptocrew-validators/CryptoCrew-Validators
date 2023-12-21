## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/juno/genesis.json)**
---

- last updated: Thu Dec 21 2023 13:53:45
- chain id: `juno-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop junod

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/juno/genesis.json"
wget -4 $URL -P $HOME/.juno/config/genesis.json

# Start the node
sudo systemctl start junod
```
