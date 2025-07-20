## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/xion/genesis.json)**
---

- last updated: Sun Jul 20 2025 14:02:48
- chain id: `xion-mainnet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop xiond

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/xion/genesis.json"
wget -4 $URL -P $HOME/.xiond/config/genesis.json

# Start the node
sudo systemctl start xiond
```
