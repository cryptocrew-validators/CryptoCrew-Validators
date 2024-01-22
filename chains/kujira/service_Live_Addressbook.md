## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/kujira/addrbook.json)**
---

- last updated: Mon Jan 22 2024 14:34:02
- chain id: `kaiyo-1`
- available peers: 360
- total peers (network scan): 417

## Instructions
```sh
# Stop the node
sudo systemctl stop kujirad

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/kujira/addrbook.json"
wget -4 $URL -P $HOME/.kujira/config/addrbook.json

# Start the node
sudo systemctl start kujirad
```
