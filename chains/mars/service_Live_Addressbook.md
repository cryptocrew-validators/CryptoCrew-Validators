## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/mars/addrbook.json)**
---

- last updated: Mon Mar 03 2025 13:52:53
- chain id: `mars-1`
- available peers: 27
- total peers (network scan): 1075

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
