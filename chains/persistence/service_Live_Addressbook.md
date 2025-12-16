## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/persistence/addrbook.json)**
---

- last updated: Tue Dec 16 2025 12:15:04
- chain id: `core-1`
- available peers: 39
- total peers (network scan): 1018

## Instructions
```sh
# Stop the node
sudo systemctl stop persistenceCore

# Download addrbook file
URL="https://dl-eu1.ccvalidators.com/SERVICE/persistence/addrbook.json"
wget -4 $URL -P $HOME/.persistenceCore/config/addrbook.json

# Start the node
sudo systemctl start persistenceCore
```
