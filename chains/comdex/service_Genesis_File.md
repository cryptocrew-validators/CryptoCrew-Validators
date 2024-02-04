## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/comdex/genesis.json)**
---

- last updated: Sun Feb 04 2024 13:48:55
- chain id: `comdex-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop comdex

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/comdex/genesis.json"
wget -4 $URL -P $HOME/.comdex/config/genesis.json

# Start the node
sudo systemctl start comdex
```
