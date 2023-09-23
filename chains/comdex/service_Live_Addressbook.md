## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/comdex/addrbook.json)**
---

- last updated: Sat Sep 23 2023 13:21:34
- chain id: `comdex-1`
- available peers: 130
- total peers (network scan): 132

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
