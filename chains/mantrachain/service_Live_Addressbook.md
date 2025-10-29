## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/mantrachain/addrbook.json)**
---

- last updated: Wed Oct 29 2025 08:19:24
- chain id: `mantra-1`
- available peers: 5
- total peers (network scan): 1110

## Instructions
```sh
# Stop the node
sudo systemctl stop mantrachaind

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/mantrachain/addrbook.json"
wget -4 $URL -P $HOME/.mantrachain/config/addrbook.json

# Start the node
sudo systemctl start mantrachaind
```
