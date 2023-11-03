## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/chihuahua/addrbook.json)**
---

- last updated: Fri Nov 03 2023 16:55:39
- chain id: `chihuahua-1`
- available peers: 348
- total peers (network scan): 212

## Instructions
```sh
# Stop the node
sudo systemctl stop chihuahuad

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/chihuahua/addrbook.json"
wget -4 $URL -P $HOME/.chihuahuad/config/addrbook.json

# Start the node
sudo systemctl start chihuahuad
```
