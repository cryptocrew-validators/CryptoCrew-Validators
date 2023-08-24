## Live Addressbook File
CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.  
**Download: [mars-1 addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**  
- last updated: Thu Aug 24 2023 15:32:45
- available peers: 0
- total peers (network scan): 791
## Instructions
```sh
# Stop the node
sudo systemctl stop marsd
 
# Download addrbook file
URL=https://dl.ccvalidators.com/SERVICE/mars/addrbook.json
 
# Start the node
sudo systemctl start marsd
```
