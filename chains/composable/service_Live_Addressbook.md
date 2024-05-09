## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/composable/addrbook.json)**
---

- last updated: Thu May 09 2024 23:42:27
- chain id: `centauri-1`
- available peers: 437
- total peers (network scan): 131

## Instructions
```sh
# Stop the node
sudo systemctl stop centaurid

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/composable/addrbook.json"
wget -4 $URL -P $HOME/.banksy/config/addrbook.json

# Start the node
sudo systemctl start centaurid
```
