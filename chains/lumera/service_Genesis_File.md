## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu1.ccvalidators.com/SERVICE/lumera/genesis.json)**
---

- last updated: Sun Jan 11 2026 15:00:15
- chain id: `lumera-mainnet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop lumerad

# Download genesis file
URL="https://dl-eu1.ccvalidators.com/SERVICE/lumera/genesis.json"
wget -4 $URL -P $HOME/.lumera/config/genesis.json

# Start the node
sudo systemctl start lumerad
```
