## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/neutron/addrbook.json)**
---

- last updated: Thu Sep 14 2023 14:15:14
- chain id: `neutron-1`
- available peers: 333
- total peers (network scan): 269

## Instructions
```sh
# Stop the node
sudo systemctl stop neutrond

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/neutron/addrbook.json"
wget -4 $URL -P $HOME/.neutrond/config/addrbook.json

# Start the node
sudo systemctl start neutrond
```
