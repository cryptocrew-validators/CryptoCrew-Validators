## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**
---

- last updated: Fri Sep 22 2023 13:22:47
- chain id: `mars-1`
- available peers: 241
- total peers (network scan): 1006

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/mars/addrbook.json"
wget -4 $URL -P $HOME/.mars/config/addrbook.json

# Start the node
sudo systemctl start marsd
```
