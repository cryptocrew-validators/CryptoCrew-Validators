## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/chihuahua/genesis.json)**
---

- last updated: Sat Jul 05 2025 16:48:29
- chain id: `chihuahua-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop chihuahuad

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/chihuahua/genesis.json"
wget -4 $URL -P $HOME/.chihuahuad/config/genesis.json

# Start the node
sudo systemctl start chihuahuad
```
