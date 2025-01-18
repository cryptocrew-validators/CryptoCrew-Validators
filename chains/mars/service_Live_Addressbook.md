## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://nbg1.your-objectstorage.com/SERVICE/mars/addrbook.json)**
---

- last updated: Sat Jan 18 2025 15:11:57
- chain id: `mars-1`
- total peers (network scan): 2

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download addrbook file
URL="https://nbg1.your-objectstorage.com/SERVICE/mars/addrbook.json"
wget -4 $URL -O $HOME/.mars/config/addrbook.json

# Start the node
sudo systemctl start marsd
```
