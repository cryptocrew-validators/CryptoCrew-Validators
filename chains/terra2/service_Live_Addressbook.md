## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/terra2/addrbook.json)**
---

- last updated: Sun Oct 06 2024 12:54:28
- chain id: `phoenix-1`
- available peers: 4201
- total peers (network scan): 4201

## Instructions
```sh
# Stop the node
sudo systemctl stop terrad

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/terra2/addrbook.json"
wget -4 $URL -P $HOME/.terra/config/addrbook.json

# Start the node
sudo systemctl start terrad
```
