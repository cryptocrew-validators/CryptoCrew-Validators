## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/juno/addrbook.json)**
---

- last updated: Fri Sep 22 2023 13:54:25
- chain id: `juno-1`

- total peers (network scan): 373

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
