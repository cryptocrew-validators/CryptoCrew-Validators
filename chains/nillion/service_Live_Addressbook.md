## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/nillion/addrbook.json)**
---

- last updated: Fri Jul 18 2025 15:49:40
- chain id: `nillion-1`
- available peers: 106
- total peers (network scan): 132

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
