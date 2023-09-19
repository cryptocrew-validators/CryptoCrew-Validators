## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/archway/genesis.json)**
---

- last updated: Tue Sep 19 2023 02:02:09
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
