## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/gravitybridge/addrbook.json)**
---

- last updated: Thu Nov 21 2024 12:15:02
- chain id: `gravity-bridge-3`
- available peers: 1032
- total peers (network scan): 1033

## Instructions
```sh
# Stop the node
sudo systemctl stop gravity

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/gravitybridge/addrbook.json"
wget -4 $URL -P $HOME/.gravity/config/addrbook.json

# Start the node
sudo systemctl start gravity
```
