## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/synternet/addrbook.json)**
---

- last updated: Fri May 30 2025 15:20:40
- chain id: `synternet-1`
- available peers: 74
- total peers (network scan): 91

## Instructions
```sh
# Stop the node
sudo systemctl stop syntd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/synternet/addrbook.json"
wget -4 $URL -P $HOME/.amber/config/addrbook.json

# Start the node
sudo systemctl start syntd
```
