## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/kujira/genesis.json)**
---

- last updated: Thu Jan 04 2024 13:35:04
- chain id: `kaiyo-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop kujirad

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/kujira/genesis.json"
wget -4 $URL -P $HOME/.kujira/config/genesis.json

# Start the node
sudo systemctl start kujirad
```
