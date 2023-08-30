## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/wormchain/genesis.json)**
---

- last updated: Wed Aug 30 2023 19:18:50
- chain id: `wormchain`

## Instructions
```sh
# Stop the node
sudo systemctl stop wormchaind

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/wormchain/genesis.json"
wget -4 $URL -P $HOME/.wormchain/config/genesis.json

# Start the node
sudo systemctl start wormchaind
```
