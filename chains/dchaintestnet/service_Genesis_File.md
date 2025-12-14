## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu1.ccvalidators.com/SERVICE/dchaintestnet/genesis.json)**
---

- last updated: Sun Dec 14 2025 14:48:01
- chain id: `test-theodoric-2`

## Instructions
```sh
# Stop the node
sudo systemctl stop dchain

# Download genesis file
URL="https://dl-eu1.ccvalidators.com/SERVICE/dchaintestnet/genesis.json"
wget -4 $URL -P $HOME/.dchain/config/genesis.json

# Start the node
sudo systemctl start dchain
```
