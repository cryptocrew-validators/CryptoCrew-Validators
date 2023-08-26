## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/evmos/addrbook.json)**
---

- last updated: Sat Aug 26 2023 16:34:18
- chain id: `evmos_9001-2`
- available peers: 2547
- total peers (network scan): 1136

## Instructions
```sh
# Stop the node
sudo systemctl stop evmosd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/evmos/addrbook.json"
wget -4 $URL -P $HOME/.evmosd/config/addrbook.json

# Start the node
sudo systemctl start evmosd
```
