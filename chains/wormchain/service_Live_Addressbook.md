## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/wormchain/addrbook.json)**
---

- last updated: Wed Aug 30 2023 18:41:09
- chain id: `wormchain`
- available peers: 40
- total peers (network scan): 61

## Instructions
```sh
# Stop the node
sudo systemctl stop wormchaind

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/wormchain/addrbook.json"
wget -4 $URL -P $HOME/.wormchain/config/addrbook.json

# Start the node
sudo systemctl start wormchaind
```
