## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/loyal/genesis.json)**
---

- last updated: Sat Nov 23 2024 04:41:23
- chain id: `loyal-main-02`

## Instructions
```sh
# Stop the node
sudo systemctl stop loyald

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/loyal/genesis.json"
wget -4 $URL -P $HOME/.loyal/config/genesis.json

# Start the node
sudo systemctl start loyald
```
