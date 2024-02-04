## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**
---

- last updated: Sun Feb 04 2024 13:23:29
- chain id: `mars-1`
- available peers: 237
- total peers (network scan): 1036

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
