## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/omniflixhub/genesis.json)**
---

- last updated: Wed Nov 13 2024 16:07:30
- chain id: `omniflixhub-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop omniflixhubd

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/omniflixhub/genesis.json"
wget -4 $URL -P $HOME/.omniflixhub/config/genesis.json

# Start the node
sudo systemctl start omniflixhubd
```
