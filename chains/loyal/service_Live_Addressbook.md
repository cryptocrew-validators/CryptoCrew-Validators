## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/loyal/addrbook.json)**
---

- last updated: Sun Feb 23 2025 04:38:19
- chain id: `loyal-main-02`
- available peers: 273
- total peers (network scan): 273

## Instructions
```sh
# Stop the node
sudo systemctl stop loyald

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/loyal/addrbook.json"
wget -4 $URL -P $HOME/.loyal/config/addrbook.json

# Start the node
sudo systemctl start loyald
```
