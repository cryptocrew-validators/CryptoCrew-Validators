## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/teritori/genesis.json)**
---

- last updated: Sat Oct 26 2024 23:52:23
- chain id: `teritori-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop teritorid

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/teritori/genesis.json"
wget -4 $URL -P $HOME/.teritorid/config/genesis.json

# Start the node
sudo systemctl start teritorid
```
