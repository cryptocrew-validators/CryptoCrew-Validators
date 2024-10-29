## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/mars/genesis.json)**
---

- last updated: Tue Oct 29 2024 14:05:14
- chain id: `mars-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/mars/genesis.json"
wget -4 $URL -P $HOME/.mars/config/genesis.json

# Start the node
sudo systemctl start marsd
```
