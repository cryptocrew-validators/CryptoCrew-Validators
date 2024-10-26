## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/synternet/genesis.json)**
---

- last updated: Sat Oct 26 2024 15:16:52
- chain id: `synternet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop syntd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/synternet/genesis.json"
wget -4 $URL -P $HOME/.amber/config/genesis.json

# Start the node
sudo systemctl start syntd
```
