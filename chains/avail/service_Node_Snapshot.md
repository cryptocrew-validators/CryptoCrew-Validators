## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2578705.tar.lz4)** | Sat Feb 21 2026 11:47:02 UTC | `Avail DA Mainnet` | 5.9G | 2578705 | `d71dbd63e4a81c950c7a0bf4dcc45d7304a51b52fce482b6875c4863df458dd0` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2578075.tar.lz4)** | Sat Feb 21 2026 08:17:34 UTC | `Avail DA Mainnet` | 5.9G | 2578075 | `86d69f2a3bc2986a49fc96c05d029e432ab0c5c282a05ed1674e5ed7e6b3d1b7` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2578705.tar.lz4"

# Download snapshot
wget -4 $URL

# Verify checksum
wget $URL.sha256
echo $(cat $(basename $URL.sha256)) $(basename $URL) | sha256sum --check

# Extract snaphost
lz4 -d $(basename $URL) | tar xvf - -C $AVAIL_HOME
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2578705.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
