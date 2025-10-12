## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.1-f12b293a885`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2008004.tar.lz4)** | Sun Oct 12 2025 08:16:42 UTC | `Avail DA Mainnet` | 5.2G | 2008004 | `ae08dcee4c17500936f42679f8637e69d99f73938ceb851c14f6d2b4be6914b2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2003684.tar.lz4)** | Sat Oct 11 2025 08:16:27 UTC | `Avail DA Mainnet` | 5.2G | 2003684 | `170e483c63628e45ee535d34dc628b89e8c1ee06e86edf8e24a9dcaf2fbd5e6d` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2008004.tar.lz4"

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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2008004.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
