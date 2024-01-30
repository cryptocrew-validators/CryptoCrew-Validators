## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/injective/addrbook.json)**
---

- last updated: Tue Jan 30 2024 07:04:05
- chain id: `injective-1`
- available peers: 1341
- total peers (network scan): 1341

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
