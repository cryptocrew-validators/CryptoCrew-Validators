## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/mars/genesis.json)**
---

- last updated: Wed Jan 22 2025 16:01:50
- chain id: `mars-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download genesis file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/mars/genesis.json"
wget -4 $URL -O $HOME/.mars/config/genesis.json

# Start the node
sudo systemctl start marsd
```
