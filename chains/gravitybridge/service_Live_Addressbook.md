## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/gravitybridge/addrbook.json)**
---

- last updated: Sat Jan 20 2024 16:25:18
- chain id: `gravity-bridge-3`
- available peers: 286
- total peers (network scan): 896

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
