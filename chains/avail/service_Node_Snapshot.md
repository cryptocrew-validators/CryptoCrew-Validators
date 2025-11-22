## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-0ad548d4817`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2185092.tar.lz4)** | Sat Nov 22 2025 08:16:45 UTC | `Avail DA Mainnet` | 5.4G | 2185092 | `a6e15b2ab5e6b6d280a9c0edc454a73d8e8e01bc4f164adb572fa97f651d3fdb` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2180772.tar.lz4)** | Fri Nov 21 2025 08:17:11 UTC | `Avail DA Mainnet` | 5.4G | 2180772 | `9fccff4708da31480922b534f5106c1cb1a2c2b905b82cc03b5b439be9ad70b9` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2185092.tar.lz4"

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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2185092.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
