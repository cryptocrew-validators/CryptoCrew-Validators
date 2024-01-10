## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**
---

- last updated: Wed Jan 10 2024 11:49:41
- chain id: `mars-1`
- available peers: 493
- total peers (network scan): 1047

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
