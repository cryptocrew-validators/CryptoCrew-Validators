## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/stride/genesis.json)**
---

- last updated: Fri Sep 19 2025 14:57:07
- chain id: `stride-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop strided

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/stride/genesis.json"
wget -4 $URL -P $HOME/.stride/config/genesis.json

# Start the node
sudo systemctl start strided
```
