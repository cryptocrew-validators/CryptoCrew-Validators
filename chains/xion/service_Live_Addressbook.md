## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/xion/addrbook.json)**
---

- last updated: Fri Jun 20 2025 16:23:09
- chain id: `xion-mainnet-1`
- available peers: 468
- total peers (network scan): 473

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
