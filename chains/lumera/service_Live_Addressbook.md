## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/lumera/addrbook.json)**
---

- last updated: Sun Dec 14 2025 18:47:56
- chain id: `lumera-mainnet-1`
- available peers: 314
- total peers (network scan): 571

## Instructions
```sh
# Stop the node
sudo systemctl stop lumerad

# Download addrbook file
URL="https://dl-eu1.ccvalidators.com/SERVICE/lumera/addrbook.json"
wget -4 $URL -P $HOME/.lumera/config/addrbook.json

# Start the node
sudo systemctl start lumerad
```
