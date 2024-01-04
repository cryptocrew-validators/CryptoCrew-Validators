## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/kava/genesis.json)**
---

- last updated: Thu Jan 04 2024 23:13:37
- chain id: `kava_2222-10`

## Instructions
```sh
# Stop the node
sudo systemctl stop kava

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/kava/genesis.json"
wget -4 $URL -P $HOME/.kava/config/genesis.json

# Start the node
sudo systemctl start kava
```
