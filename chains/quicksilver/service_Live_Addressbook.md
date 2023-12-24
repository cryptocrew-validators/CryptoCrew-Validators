## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/quicksilver/addrbook.json)**
---

- last updated: Sun Dec 24 2023 12:07:18
- chain id: `quicksilver-2`
- available peers: 710
- total peers (network scan): 710

## Instructions
```sh
# Stop the node
sudo systemctl stop quicksilverd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/quicksilver/addrbook.json"
wget -4 $URL -P $HOME/.quicksilverd/config/addrbook.json

# Start the node
sudo systemctl start quicksilverd
```
