## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/persistence/genesis.json)**
---

- last updated: Fri Oct 11 2024 11:39:31
- chain id: `core-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop persistenceCore

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/persistence/genesis.json"
wget -4 $URL -P $HOME/.persistenceCore/config/genesis.json

# Start the node
sudo systemctl start persistenceCore
```
