## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/akash/addrbook.json)**
---

- last updated: Sat Mar 08 2025 10:15:45
- chain id: `akashnet-2`
- available peers: 990
- total peers (network scan): 990

## Instructions
```sh
# Stop the node
sudo systemctl stop akash

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/akash/addrbook.json"
wget -4 $URL -P $HOME/.akash/config/addrbook.json

# Start the node
sudo systemctl start akash
```
