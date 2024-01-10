## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/migaloo/addrbook.json)**
---

- last updated: Wed Jan 10 2024 00:58:32
- chain id: `migaloo-1`

- total peers (network scan): 190

## Instructions
```sh
# Stop the node
sudo systemctl stop migalood

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/migaloo/addrbook.json"
wget -4 $URL -P $HOME/.migalood/config/addrbook.json

# Start the node
sudo systemctl start migalood
```
