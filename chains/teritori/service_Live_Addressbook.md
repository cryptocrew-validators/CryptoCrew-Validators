## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/teritori/addrbook.json)**
---

- last updated: Wed Feb 12 2025 23:49:05
- chain id: `teritori-1`

- total peers (network scan): 383

## Instructions
```sh
# Stop the node
sudo systemctl stop teritorid

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/teritori/addrbook.json"
wget -4 $URL -P $HOME/.teritorid/config/addrbook.json

# Start the node
sudo systemctl start teritorid
```
