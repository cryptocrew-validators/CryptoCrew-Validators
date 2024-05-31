## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/mars/addrbook.json)**
---

- last updated: Fri May 31 2024 16:36:49
- chain id: `mars-1`
- available peers: 998
- total peers (network scan): 998

## Instructions
```sh
# Stop the node
sudo systemctl stop marsd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/mars/addrbook.json"
wget -4 $URL -P $HOME/.mars/config/addrbook.json

# Start the node
sudo systemctl start marsd
```
