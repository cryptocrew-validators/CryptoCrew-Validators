## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-tyo.ccvalidators.com/SERVICE/dydx/addrbook.json)**
---

- last updated: Sun Dec 29 2024 10:09:52
- chain id: `dydx-mainnet-1`
- available peers: 1089
- total peers (network scan): 1089

## Instructions
```sh
# Stop the node
sudo systemctl stop dydxprotocold

# Download addrbook file
URL="https://dl-tyo.ccvalidators.com/SERVICE/dydx/addrbook.json"
wget -4 $URL -P $HOME/.dydxprotocol/config/addrbook.json

# Start the node
sudo systemctl start dydxprotocold
```
