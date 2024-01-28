## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/comdex/addrbook.json)**
---

- last updated: Sun Jan 28 2024 13:47:32
- chain id: `comdex-1`

- total peers (network scan): 217

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
