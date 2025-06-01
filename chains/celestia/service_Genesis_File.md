## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/celestia/genesis.json)**
---

- last updated: Sun Jun 01 2025 17:33:29
- chain id: `celestia`

## Instructions
```sh
# Stop the node
sudo systemctl stop celestia-appd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/celestia/genesis.json"
wget -4 $URL -P $HOME/.celestia-app/config/genesis.json

# Start the node
sudo systemctl start celestia-appd
```
