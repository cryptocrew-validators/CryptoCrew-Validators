## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-tyo.ccvalidators.com/SERVICE/dydx/genesis.json)**
---

- last updated: Sat Jul 26 2025 11:03:48
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
