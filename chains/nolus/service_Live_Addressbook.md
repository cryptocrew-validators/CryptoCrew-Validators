## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/nolus/addrbook.json)**
---

- last updated: Sat Mar 15 2025 00:53:14
- chain id: `pirin-1`
- available peers: 1031
- total peers (network scan): 1031

## Instructions
```sh
# Stop the node
sudo systemctl stop nolusd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/nolus/addrbook.json"
wget -4 $URL -P $HOME/.nolus/config/addrbook.json

# Start the node
sudo systemctl start nolusd
```
