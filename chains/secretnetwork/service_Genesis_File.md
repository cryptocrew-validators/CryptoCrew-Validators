## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/secret/genesis.json)**
---

- last updated: Thu Nov 23 2023 17:12:05
- chain id: `secret-4`

## Instructions
```sh
# Stop the node
sudo systemctl stop secretd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/secret/genesis.json"
wget -4 $URL -P $HOME/.secretd/config/genesis.json

# Start the node
sudo systemctl start secretd
```
