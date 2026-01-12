## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/nolus/addrbook.json)**
---

- last updated: Mon Jan 12 2026 01:57:29
- chain id: `pirin-1`
- available peers: 1111
- total peers (network scan): 1111

## Instructions
```sh
# Stop the node
sudo systemctl stop nolusd

# Download addrbook file
URL="https://dl-eu1.ccvalidators.com/SERVICE/nolus/addrbook.json"
wget -4 $URL -P $HOME/.nolus/config/addrbook.json

# Start the node
sudo systemctl start nolusd
```
