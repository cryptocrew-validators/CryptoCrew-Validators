## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/xion/addrbook.json)**
---

- last updated: Sat Nov 16 2024 11:47:16
- chain id: `xion-mainnet-1`
- available peers: 105
- total peers (network scan): 47

## Instructions
```sh
# Stop the node
sudo systemctl stop xiond

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/xion/addrbook.json"
wget -4 $URL -P $HOME/.xiond/config/addrbook.json

# Start the node
sudo systemctl start xiond
```
