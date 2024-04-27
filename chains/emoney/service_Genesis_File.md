## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/emoney/genesis.json)**
---

- last updated: Sat Apr 27 2024 13:20:29
- chain id: `emoney-3`

## Instructions
```sh
# Stop the node
sudo systemctl stop emd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/emoney/genesis.json"
wget -4 $URL -P $HOME/.emd/config/genesis.json

# Start the node
sudo systemctl start emd
```
