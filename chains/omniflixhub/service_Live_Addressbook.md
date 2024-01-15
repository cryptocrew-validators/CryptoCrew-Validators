## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/omniflixhub/addrbook.json)**
---

- last updated: Mon Jan 15 2024 04:58:56
- chain id: `omniflixhub-1`
- available peers: 103
- total peers (network scan): 121

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
