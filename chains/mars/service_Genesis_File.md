## Genesis File
A Genesis File () defines the initial state of a chain. We provide hosted genesis files for all chains we validate.  
**Download: [mars-1 genesis.json](https://dl.ccvalidators.com/SERVICE/mars/genesis.json)**  
- last updated: Wed Aug 23 2023 18:01:33
---
## Instructions
```sh
# Stop the node
sudo systemctl stop marsd
 
# Download genesis file
URL=https://dl.ccvalidators.com/SERVICE/mars/genesis.json
wget -4  -P $HOME/.mars/config/genesis.json
 
# Start the node
sudo systemctl start marsd
```sh
