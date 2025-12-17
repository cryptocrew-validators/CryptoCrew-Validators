## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu1.ccvalidators.com/SERVICE/dchaintestnet/addrbook.json)**
---

- last updated: Wed Dec 17 2025 14:48:02
- chain id: `test-theodoric-2`

- total peers (network scan): 2

## Instructions
```sh
# Stop the node
sudo systemctl stop dchain

# Download addrbook file
URL="https://dl-eu1.ccvalidators.com/SERVICE/dchaintestnet/addrbook.json"
wget -4 $URL -P $HOME/.dchain/config/addrbook.json

# Start the node
sudo systemctl start dchain
```
