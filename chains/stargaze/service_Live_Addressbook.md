## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/stargaze/addrbook.json)**
---

- last updated: Mon Aug 11 2025 05:11:19
- chain id: `stargaze-1`

- total peers (network scan): 1088

## Instructions
```sh
# Stop the node
sudo systemctl stop starsd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/stargaze/addrbook.json"
wget -4 $URL -P $HOME/.starsd/config/addrbook.json

# Start the node
sudo systemctl start starsd
```
