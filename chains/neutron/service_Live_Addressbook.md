## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/neutron/addrbook.json)**
---

- last updated: Sun Aug 27 2023 12:24:22
- chain id: `neutron-1`
- available peers: 143
- total peers (network scan): 236

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
