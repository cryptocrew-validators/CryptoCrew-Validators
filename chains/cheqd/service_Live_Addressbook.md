## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/cheqd/addrbook.json)**
---

- last updated: Thu Jan 25 2024 03:52:57
- chain id: `cheqd-mainnet-1`
- available peers: 21
- total peers (network scan): 200

## Instructions
```sh
# Stop the node
sudo systemctl stop cheqd-noded

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/cheqd/addrbook.json"
wget -4 $URL -P $HOME/.cheqdnode/config/addrbook.json

# Start the node
sudo systemctl start cheqd-noded
```
