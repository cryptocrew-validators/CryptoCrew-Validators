## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/comdex/addrbook.json)**
---

- last updated: Thu Jan 11 2024 11:54:47
- chain id: `comdex-1`
- available peers: 150
- total peers (network scan): 728

## Instructions
```sh
# Stop the node
sudo systemctl stop comdex

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/comdex/addrbook.json"
wget -4 $URL -P $HOME/.comdex/config/addrbook.json

# Start the node
sudo systemctl start comdex
```
