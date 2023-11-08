## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/emoney/addrbook.json)**
---

- last updated: Wed Nov 08 2023 11:24:44
- chain id: `emoney-3`
- available peers: 83
- total peers (network scan): 83

## Instructions
```sh
# Stop the node
sudo systemctl stop emd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/emoney/addrbook.json"
wget -4 $URL -P $HOME/.emd/config/addrbook.json

# Start the node
sudo systemctl start emd
```
