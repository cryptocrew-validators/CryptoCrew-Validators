## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/dymension/genesis.json)**
---

- last updated: Thu Jan 23 2025 18:12:42
- chain id: `dymension_1100-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop dymd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/dymension/genesis.json"
wget -4 $URL -P $HOME/.dymension/config/genesis.json

# Start the node
sudo systemctl start dymd
```
