## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/persistence/addrbook.json)**
---

- last updated: Fri Jan 03 2025 11:39:38
- chain id: `core-1`
- available peers: 12
- total peers (network scan): 196

## Instructions
```sh
# Stop the node
sudo systemctl stop persistenceCore

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/persistence/addrbook.json"
wget -4 $URL -P $HOME/.persistenceCore/config/addrbook.json

# Start the node
sudo systemctl start persistenceCore
```
