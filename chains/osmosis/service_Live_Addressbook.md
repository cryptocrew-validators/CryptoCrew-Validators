## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/osmosis/addrbook.json)**
---

- last updated: Wed Mar 27 2024 12:00:16
- chain id: `osmosis-1`
- available peers: 1115
- total peers (network scan): 1115

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
