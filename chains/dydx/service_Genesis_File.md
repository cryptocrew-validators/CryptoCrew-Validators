## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-tyo.ccvalidators.com/SERVICE/dydx/genesis.json)**
---

- last updated: Wed Jun 25 2025 11:15:18
- chain id: `dydx-mainnet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop dydxprotocold

# Download genesis file
URL="https://dl-tyo.ccvalidators.com/SERVICE/dydx/genesis.json"
wget -4 $URL -P $HOME/.dydxprotocol/config/genesis.json

# Start the node
sudo systemctl start dydxprotocold
```
