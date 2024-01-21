## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/empowerchain/genesis.json)**
---

- last updated: Sun Jan 21 2024 02:20:51
- chain id: `empowerchain-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop empowerd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/empowerchain/genesis.json"
wget -4 $URL -P $HOME/.empowerchain/config/genesis.json

# Start the node
sudo systemctl start empowerd
```
