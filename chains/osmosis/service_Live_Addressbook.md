## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/osmosis/addrbook.json)**
---

- last updated: Fri Sep 26 2025 13:59:14
- chain id: `osmosis-1`

- total peers (network scan): 2

## Instructions
```sh
# Stop the node
sudo systemctl stop osmosisd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/osmosis/addrbook.json"
wget -4 $URL -P $HOME/.osmosisd/config/addrbook.json

# Start the node
sudo systemctl start osmosisd
```
