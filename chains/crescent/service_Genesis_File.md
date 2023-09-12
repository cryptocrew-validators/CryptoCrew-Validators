## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/crescent/genesis.json)**
---

- last updated: Tue Sep 12 2023 18:42:01
- chain id: `crescent-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop crescentd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/crescent/genesis.json"
wget -4 $URL -P $HOME/.crescent/config/genesis.json

# Start the node
sudo systemctl start crescentd
```
