## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/oraichain/addrbook.json)**
---

- last updated: Fri Apr 04 2025 08:18:53
- chain id: `Oraichain`
- available peers: 755
- total peers (network scan): 614

## Instructions
```sh
# Stop the node
sudo systemctl stop oraid

# Download addrbook file
URL="https://ccv-s3.nbg1.your-objectstorage.com/SERVICE/oraichain/addrbook.json"
wget -4 $URL -O $HOME/.oraid/config/addrbook.json

# Start the node
sudo systemctl start oraid
```
