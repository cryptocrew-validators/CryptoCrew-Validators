## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/migaloo/addrbook.json)**
---

- last updated: Fri Mar 28 2025 00:54:26
- chain id: `migaloo-1`
- available peers: 283
- total peers (network scan): 283

## Instructions
```sh
# Stop the node
sudo systemctl stop migalood

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/migaloo/addrbook.json"
wget -4 $URL -P $HOME/.migalood/config/addrbook.json

# Start the node
sudo systemctl start migalood
```
