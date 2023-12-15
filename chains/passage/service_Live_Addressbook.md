## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/passage/addrbook.json)**
---

- last updated: Fri Dec 15 2023 06:01:31
- chain id: `passage-2`

- total peers (network scan): 413

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
