## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/nillion/genesis.json)**
---

- last updated: Sat Jul 05 2025 09:28:39
- chain id: `nillion-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop nilchaind

# Download genesis file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/nillion/genesis.json"
wget -4 $URL -O $HOME/.nillionapp/config/genesis.json

# Start the node
sudo systemctl start nilchaind
```
