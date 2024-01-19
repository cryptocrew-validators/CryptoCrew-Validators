## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/lumnetwork/addrbook.json)**
---

- last updated: Fri Jan 19 2024 05:40:51
- chain id: `lum-network-1`

- total peers (network scan): 172

## Instructions
```sh
# Stop the node
sudo systemctl stop lumd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/lumnetwork/addrbook.json"
wget -4 $URL -P $HOME/.lumd/config/addrbook.json

# Start the node
sudo systemctl start lumd
```
