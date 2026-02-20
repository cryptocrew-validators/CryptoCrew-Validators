## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2574385.tar.lz4)** | Fri Feb 20 2026 11:48:20 UTC | `Avail DA Mainnet` | 5.9G | 2574385 | `5d685416b18053647f3ffa4645206b773e5376fe2dd76539a30f15d67fdd7294` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2573755.tar.lz4)** | Fri Feb 20 2026 08:19:29 UTC | `Avail DA Mainnet` | 5.9G | 2573755 | `4aba1519a015dfd6f545f4cdb484da706760ab60af7a28201a7a41e9f0ac6bde` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2574385.tar.lz4"

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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2574385.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
