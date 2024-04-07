## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/omniflixhub/addrbook.json)**
---

- last updated: Sun Apr 07 2024 16:04:17
- chain id: `omniflixhub-1`
- available peers: 98
- total peers (network scan): 97

## Instructions
```sh
# Stop the node
sudo systemctl stop omniflixhubd

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/omniflixhub/addrbook.json"
wget -4 $URL -P $HOME/.omniflixhub/config/addrbook.json

# Start the node
sudo systemctl start omniflixhubd
```
