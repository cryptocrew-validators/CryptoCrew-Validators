## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/archway/genesis.json)**
---

- last updated: Sat Sep 02 2023 23:59:32
- chain id: `archway-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop archwayd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/archway/genesis.json"
wget -4 $URL -P $HOME/.archway/config/genesis.json

# Start the node
sudo systemctl start archwayd
```
