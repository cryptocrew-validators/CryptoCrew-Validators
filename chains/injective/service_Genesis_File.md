## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/injective/genesis.json)**
---

- last updated: Thu Feb 01 2024 06:56:16
- chain id: `injective-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop injectived

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/injective/genesis.json"
wget -4 $URL -P $HOME/.injectived/config/genesis.json

# Start the node
sudo systemctl start injectived
```
