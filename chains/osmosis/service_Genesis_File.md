## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/osmosis/genesis.json)**
---

- last updated: Wed Oct 30 2024 13:09:14
- chain id: `osmosis-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop osmosisd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/osmosis/genesis.json"
wget -4 $URL -P $HOME/.osmosisd/config/genesis.json

# Start the node
sudo systemctl start osmosisd
```
