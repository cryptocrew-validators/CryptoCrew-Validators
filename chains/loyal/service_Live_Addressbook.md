## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/loyal/addrbook.json)**
---

- last updated: Thu Feb 01 2024 04:39:22
- chain id: `loyal-main-02`
- available peers: 114
- total peers (network scan): 433

## Instructions
```sh
# Stop the node
sudo systemctl stop loyald

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/loyal/addrbook.json"
wget -4 $URL -P $HOME/.loyal/config/addrbook.json

# Start the node
sudo systemctl start loyald
```
