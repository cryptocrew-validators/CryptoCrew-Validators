## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/terra2/genesis.json)**
---

- last updated: Thu Oct 17 2024 12:56:30
- chain id: `phoenix-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop terrad

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/terra2/genesis.json"
wget -4 $URL -P $HOME/.terra/config/genesis.json

# Start the node
sudo systemctl start terrad
```
