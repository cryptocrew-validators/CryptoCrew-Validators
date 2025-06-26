## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/dymension/addrbook.json)**
---

- last updated: Thu Jun 26 2025 16:58:26
- chain id: `dymension_1100-1`
- available peers: 239
- total peers (network scan): 1075

## Instructions
```sh
# Stop the node
sudo systemctl stop dymd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/dymension/addrbook.json"
wget -4 $URL -P $HOME/.dymension/config/addrbook.json

# Start the node
sudo systemctl start dymd
```
