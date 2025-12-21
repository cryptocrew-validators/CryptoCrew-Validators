## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/stargaze/addrbook.json)**
---

- last updated: Sun Dec 21 2025 05:23:37
- chain id: `stargaze-1`
- available peers: 676
- total peers (network scan): 1057

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
