## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/empowerchain/addrbook.json)**
---

- last updated: Fri Jan 12 2024 09:50:17
- chain id: `empowerchain-1`
- available peers: 232
- total peers (network scan): 1062

## Instructions
```sh
# Stop the node
sudo systemctl stop empowerd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/empowerchain/addrbook.json"
wget -4 $URL -P $HOME/.empowerchain/config/addrbook.json

# Start the node
sudo systemctl start empowerd
```
