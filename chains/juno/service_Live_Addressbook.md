## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/juno/addrbook.json)**
---

- last updated: Fri Dec 22 2023 13:22:25
- chain id: `juno-1`
- available peers: 1691
- total peers (network scan): 1691

## Instructions
```sh
# Stop the node
sudo systemctl stop junod

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/juno/addrbook.json"
wget -4 $URL -P $HOME/.juno/config/addrbook.json

# Start the node
sudo systemctl start junod
```
