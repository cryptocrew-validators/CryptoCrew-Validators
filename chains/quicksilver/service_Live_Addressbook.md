## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/quicksilver/addrbook.json)**
---

- last updated: Mon Nov 11 2024 11:43:57
- chain id: `quicksilver-2`
- available peers: 1016
- total peers (network scan): 1016

## Instructions
```sh
# Stop the node
sudo systemctl stop quicksilverd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/quicksilver/addrbook.json"
wget -4 $URL -P $HOME/.quicksilverd/config/addrbook.json

# Start the node
sudo systemctl start quicksilverd
```
