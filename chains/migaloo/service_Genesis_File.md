## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/migaloo/genesis.json)**
---

- last updated: Fri Apr 18 2025 00:52:35
- chain id: `migaloo-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop migalood

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/migaloo/genesis.json"
wget -4 $URL -P $HOME/.migalood/config/genesis.json

# Start the node
sudo systemctl start migalood
```
