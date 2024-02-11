## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/gravitybridge/addrbook.json)**
---

- last updated: Sun Feb 11 2024 11:59:07
- chain id: `gravity-bridge-3`
- available peers: 175
- total peers (network scan): 909

## Instructions
```sh
# Stop the node
sudo systemctl stop gravity

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/gravitybridge/addrbook.json"
wget -4 $URL -P $HOME/.gravity/config/addrbook.json

# Start the node
sudo systemctl start gravity
```
