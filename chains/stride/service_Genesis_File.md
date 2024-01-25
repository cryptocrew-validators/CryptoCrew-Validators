## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/stride/genesis.json)**
---

- last updated: Thu Jan 25 2024 11:25:35
- chain id: `stride-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop strided

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/stride/genesis.json"
wget -4 $URL -P $HOME/.stride/config/genesis.json

# Start the node
sudo systemctl start strided
```
