## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/celestia/addrbook.json)**
---

- last updated: Tue Jun 24 2025 17:34:44
- chain id: `celestia`
- available peers: 1859
- total peers (network scan): 1859

## Instructions
```sh
# Stop the node
sudo systemctl stop celestia-appd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/celestia/addrbook.json"
wget -4 $URL -P $HOME/.celestia-app/config/addrbook.json

# Start the node
sudo systemctl start celestia-appd
```
