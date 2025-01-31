## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/kava/addrbook.json)**
---

- last updated: Fri Jan 31 2025 08:28:15
- chain id: `kava_2222-10`

- total peers (network scan): 1164

## Instructions
```sh
# Stop the node
sudo systemctl stop kava

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/kava/addrbook.json"
wget -4 $URL -P $HOME/.kava/config/addrbook.json

# Start the node
sudo systemctl start kava
```
