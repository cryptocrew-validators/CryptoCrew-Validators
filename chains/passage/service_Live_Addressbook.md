## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/passage/addrbook.json)**
---

- last updated: Sat Dec 16 2023 05:19:33
- chain id: `passage-2`
- available peers: 165
- total peers (network scan): 414

## Instructions
```sh
# Stop the node
sudo systemctl stop passage

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/passage/addrbook.json"
wget -4 $URL -P $HOME/.passage/config/addrbook.json

# Start the node
sudo systemctl start passage
```
