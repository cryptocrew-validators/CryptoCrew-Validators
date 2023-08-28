## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/evmos/genesis.json)**
---

- last updated: Mon Aug 28 2023 15:36:12
- chain id: `evmos_9001-2`

## Instructions
```sh
# Stop the node
sudo systemctl stop evmosd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/evmos/genesis.json"
wget -4 $URL -P $HOME/.evmosd/config/genesis.json

# Start the node
sudo systemctl start evmosd
```
