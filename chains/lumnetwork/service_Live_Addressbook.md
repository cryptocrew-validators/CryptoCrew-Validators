## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/lumnetwork/addrbook.json)**
---

- last updated: Thu Apr 25 2024 06:32:55
- chain id: `lum-network-1`

- total peers (network scan): 149

## Instructions
```sh
# Stop the node
sudo systemctl stop lumd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/lumnetwork/addrbook.json"
wget -4 $URL -P $HOME/.lumd/config/addrbook.json

# Start the node
sudo systemctl start lumd
```
