## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/cosmoshub/addrbook.json)**
---

- last updated: Fri Jan 17 2025 17:36:54
- chain id: `cosmoshub-4`
- available peers: 1448
- total peers (network scan): 1448

## Instructions
```sh
# Stop the node
sudo systemctl stop gaiad

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/cosmoshub/addrbook.json"
wget -4 $URL -P $HOME/.gaia/config/addrbook.json

# Start the node
sudo systemctl start gaiad
```
