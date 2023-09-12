## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/nolus/addrbook.json)**
---

- last updated: Tue Sep 12 2023 01:54:01
- chain id: `pirin-1`
- available peers: 241
- total peers (network scan): 241

## Instructions
```sh
# Stop the node
sudo systemctl stop nolusd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/nolus/addrbook.json"
wget -4 $URL -P $HOME/.nolus/config/addrbook.json

# Start the node
sudo systemctl start nolusd
```
