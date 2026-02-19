## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/stargaze/addrbook.json)**
---

- last updated: Thu Feb 19 2026 05:18:36
- chain id: `stargaze-1`
- available peers: 1116
- total peers (network scan): 1116

## Instructions
```sh
# Stop the node
sudo systemctl stop starsd

# Download addrbook file
URL="https://dl-eu1.ccvalidators.com/SERVICE/stargaze/addrbook.json"
wget -4 $URL -P $HOME/.starsd/config/addrbook.json

# Start the node
sudo systemctl start starsd
```
