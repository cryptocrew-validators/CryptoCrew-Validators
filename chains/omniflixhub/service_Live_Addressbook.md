## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/omniflixhub/addrbook.json)**
---

- last updated: Mon Jan 08 2024 05:05:15
- chain id: `omniflixhub-1`
- available peers: 376
- total peers (network scan): 114

## Instructions
```sh
# Stop the node
sudo systemctl stop omniflixhubd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/omniflixhub/addrbook.json"
wget -4 $URL -P $HOME/.omniflixhub/config/addrbook.json

# Start the node
sudo systemctl start omniflixhubd
```
