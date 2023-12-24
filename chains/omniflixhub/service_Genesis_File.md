## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/omniflixhub/genesis.json)**
---

- last updated: Sun Dec 24 2023 05:05:21
- chain id: `omniflixhub-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop omniflixhubd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/omniflixhub/genesis.json"
wget -4 $URL -P $HOME/.omniflixhub/config/genesis.json

# Start the node
sudo systemctl start omniflixhubd
```
