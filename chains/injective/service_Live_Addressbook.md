## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/injective/addrbook.json)**
---

- last updated: Sun Jan 21 2024 13:03:25
- chain id: `injective-1`
- available peers: 1352
- total peers (network scan): 1352

## Instructions
```sh
# Stop the node
sudo systemctl stop injectived

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/injective/addrbook.json"
wget -4 $URL -P $HOME/.injectived/config/addrbook.json

# Start the node
sudo systemctl start injectived
```
