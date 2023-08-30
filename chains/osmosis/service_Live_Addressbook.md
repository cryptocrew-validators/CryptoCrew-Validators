## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/osmosis/addrbook.json)**
---

- last updated: Wed Aug 30 2023 11:30:16
- chain id: `osmosis-1`
- available peers: 1135
- total peers (network scan): 1135

## Instructions
```sh
# Stop the node
sudo systemctl stop osmosisd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/osmosis/addrbook.json"
wget -4 $URL -P $HOME/.osmosisd/config/addrbook.json

# Start the node
sudo systemctl start osmosisd
```
