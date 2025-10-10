## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.1-f12b293a885`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1999364.tar.lz4)** | Fri Oct 10 2025 08:16:28 UTC | `Avail DA Mainnet` | 5.2G | 1999364 | `dda1915b354ca27511af120960f5b5e686996e4b30a25a5420a90e071113ac2c` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1995045.tar.lz4)** | Thu Oct 09 2025 08:16:40 UTC | `Avail DA Mainnet` | 5.2G | 1995045 | `383d4b9aaa828a8340f460173dd7d36d221225de66b5518636f50198a4cc1944` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1999364.tar.lz4"

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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1999364.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
