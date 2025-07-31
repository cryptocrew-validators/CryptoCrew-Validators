## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/comdex/addrbook.json)**
---

- last updated: Thu Jul 31 2025 11:40:29
- chain id: `comdex-1`
- available peers: 143
- total peers (network scan): 196

## Instructions
```sh
# Stop the node
sudo systemctl stop comdex

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/comdex/addrbook.json"
wget -4 $URL -P $HOME/.comdex/config/addrbook.json

# Start the node
sudo systemctl start comdex
```
