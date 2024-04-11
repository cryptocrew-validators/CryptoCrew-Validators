## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/comdex/genesis.json)**
---

- last updated: Thu Apr 11 2024 11:54:31
- chain id: `comdex-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop comdex

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/comdex/genesis.json"
wget -4 $URL -P $HOME/.comdex/config/genesis.json

# Start the node
sudo systemctl start comdex
```
