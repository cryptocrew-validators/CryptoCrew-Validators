## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/chihuahua/addrbook.json)**
---

- last updated: Tue Nov 11 2025 18:47:27
- chain id: `chihuahua-1`
- available peers: 826
- total peers (network scan): 719

## Instructions
```sh
# Stop the node
sudo systemctl stop chihuahuad

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/chihuahua/addrbook.json"
wget -4 $URL -P $HOME/.chihuahuad/config/addrbook.json

# Start the node
sudo systemctl start chihuahuad
```
