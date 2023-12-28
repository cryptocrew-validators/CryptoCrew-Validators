## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/cheqd/genesis.json)**
---

- last updated: Thu Dec 28 2023 02:11:17
- chain id: `cheqd-mainnet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop cheqd-noded

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/cheqd/genesis.json"
wget -4 $URL -P $HOME/.cheqdnode/config/genesis.json

# Start the node
sudo systemctl start cheqd-noded
```
