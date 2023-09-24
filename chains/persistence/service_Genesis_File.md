## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/persistence/genesis.json)**
---

- last updated: Sun Sep 24 2023 13:41:07
- chain id: `core-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop persistenceCore

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/persistence/genesis.json"
wget -4 $URL -P $HOME/.persistenceCore/config/genesis.json

# Start the node
sudo systemctl start persistenceCore
```
