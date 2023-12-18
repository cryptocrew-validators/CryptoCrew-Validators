## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/cosmoshub/genesis.json)**
---

- last updated: Mon Dec 18 2023 12:32:57
- chain id: `cosmoshub-4`

## Instructions
```sh
# Stop the node
sudo systemctl stop gaiad

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/cosmoshub/genesis.json"
wget -4 $URL -P $HOME/.gaia/config/genesis.json

# Start the node
sudo systemctl start gaiad
```
