## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/gravitybridge/addrbook.json)**
---

- last updated: Wed Jan 15 2025 13:58:27
- chain id: `gravity-bridge-3`
- available peers: 1334
- total peers (network scan): 1334

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
