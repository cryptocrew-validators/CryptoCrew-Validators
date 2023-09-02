## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/neutron/addrbook.json)**
---

- last updated: Sat Sep 02 2023 14:11:56
- chain id: `neutron-1`
- available peers: 234
- total peers (network scan): 234

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
