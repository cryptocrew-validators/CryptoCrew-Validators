## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/nolus/genesis.json)**
---

- last updated: Wed Apr 09 2025 23:53:09
- chain id: `pirin-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop nolusd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/nolus/genesis.json"
wget -4 $URL -P $HOME/.nolus/config/genesis.json

# Start the node
sudo systemctl start nolusd
```
