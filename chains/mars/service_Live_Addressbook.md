## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [mars-1 addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**
---

> [!NOTE]
> - last updated: Thu Aug 24 2023 16:09:51
> - available peers: 178
> - total peers (network scan): 790

## Instructions
```sh
# Stop the node
sudo systemctl stop "marsd"

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/mars/addrbook.json"
wget -4 "$URL" -P "$README_DAEMON_HOME/config/addrbook.json"

# Start the node
sudo systemctl start "marsd"
```
