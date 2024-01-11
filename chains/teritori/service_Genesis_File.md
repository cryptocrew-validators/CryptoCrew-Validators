## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/teritori/genesis.json)**
---

- last updated: Thu Jan 11 2024 23:41:16
- chain id: `teritori-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop teritorid

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/teritori/genesis.json"
wget -4 $URL -P $HOME/.teritorid/config/genesis.json

# Start the node
sudo systemctl start teritorid
```
