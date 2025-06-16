## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/mantrachain/genesis.json)**
---

- last updated: Mon Jun 16 2025 09:35:02
- chain id: `mantra-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop mantrachaind

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/mantrachain/genesis.json"
wget -4 $URL -P $HOME/.mantrachain/config/genesis.json

# Start the node
sudo systemctl start mantrachaind
```
