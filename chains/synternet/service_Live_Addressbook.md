## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/synternet/addrbook.json)**
---

- last updated: Sun Mar 09 2025 15:16:57
- chain id: `synternet-1`
- available peers: 49
- total peers (network scan): 78

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
