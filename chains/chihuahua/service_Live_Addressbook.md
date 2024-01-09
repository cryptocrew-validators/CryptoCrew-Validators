## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/chihuahua/addrbook.json)**
---

- last updated: Tue Jan 09 2024 16:52:26
- chain id: `chihuahua-1`
- available peers: 647
- total peers (network scan): 255

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
