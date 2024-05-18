## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/dymension/addrbook.json)**
---

- last updated: Sat May 18 2024 17:00:35
- chain id: `dymension_1100-1`
- available peers: 1597
- total peers (network scan): 1769

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
