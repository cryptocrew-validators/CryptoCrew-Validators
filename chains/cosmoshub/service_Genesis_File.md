## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/cosmoshub/genesis.json)**
---

- last updated: Sat Jul 05 2025 14:06:01
- chain id: `cosmoshub-4`

## Instructions
```sh
# Stop the node
sudo systemctl stop gaiad

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/cosmoshub/genesis.json"
wget -4 $URL -P $HOME/.gaia/config/genesis.json

# Start the node
sudo systemctl start gaiad
```
