## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/oraichain/genesis.json)**
---

- last updated: Sat Apr 19 2025 08:46:40
- chain id: `Oraichain`

## Instructions
```sh
# Stop the node
sudo systemctl stop oraid

# Download genesis file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/oraichain/genesis.json"
wget -4 $URL -O $HOME/.oraid/config/genesis.json

# Start the node
sudo systemctl start oraid
```
