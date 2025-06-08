## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/nillion/addrbook.json)**
---

- last updated: Sun Jun 08 2025 15:50:20
- chain id: `nillion-1`
- available peers: 201
- total peers (network scan): 149

## Instructions
```sh
# Stop the node
sudo systemctl stop nilchaind

# Download addrbook file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/nillion/addrbook.json"
wget -4 $URL -O $HOME/.nillionapp/config/addrbook.json

# Start the node
sudo systemctl start nilchaind
```
