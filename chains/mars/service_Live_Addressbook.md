## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/mars/addrbook.json)**
---

- last updated: Sun Jan 19 2025 16:30:30
- chain id: `mars-1`
- available peers: 17
- total peers (network scan): 1089

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download addrbook file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/mars/addrbook.json"
wget -4 $URL -O $HOME/.mars/config/addrbook.json

# Start the node
sudo systemctl start marsd
```
