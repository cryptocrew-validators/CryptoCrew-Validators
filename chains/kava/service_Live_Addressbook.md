## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/kava/addrbook.json)**
---

- last updated: Thu Jan 18 2024 23:23:24
- chain id: `kava_2222-10`
- available peers: 1066
- total peers (network scan): 1066

## Instructions
```sh
# Stop the node
sudo systemctl stop kava

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/kava/addrbook.json"
wget -4 $URL -P $HOME/.kava/config/addrbook.json

# Start the node
sudo systemctl start kava
```
