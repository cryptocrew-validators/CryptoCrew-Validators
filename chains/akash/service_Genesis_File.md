## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/akash/genesis.json)**
---

- last updated: Mon Mar 03 2025 10:27:12
- chain id: `akashnet-2`

## Instructions
```sh
# Stop the node
sudo systemctl stop akash

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/akash/genesis.json"
wget -4 $URL -P $HOME/.akash/config/genesis.json

# Start the node
sudo systemctl start akash
```
