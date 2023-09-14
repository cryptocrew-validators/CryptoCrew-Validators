## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/archway/addrbook.json)**
---

- last updated: Thu Sep 14 2023 00:17:17
- chain id: `archway-1`

- total peers (network scan): 443

## Instructions
```sh
# Stop the node
sudo systemctl stop archwayd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/archway/addrbook.json"
wget -4 $URL -P $HOME/.archway/config/addrbook.json

# Start the node
sudo systemctl start archwayd
```
