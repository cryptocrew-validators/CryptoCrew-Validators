## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/lumnetwork/genesis.json)**
---

- last updated: Thu Oct 31 2024 05:42:34
- chain id: `lum-network-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop lumd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/lumnetwork/genesis.json"
wget -4 $URL -P $HOME/.lumd/config/genesis.json

# Start the node
sudo systemctl start lumd
```
