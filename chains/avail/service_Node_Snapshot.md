## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.2.0-a6600ea38c9`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1369073.tar.lz4)** | Sat May 17 2025 08:16:29 UTC | `Avail DA Mainnet` | 4.2G | 1369073 | `7a24d400d2461ef2cc1b14e8d0520f68dadec9cd43bdf2cf9f6ddae68facba36` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1364759.tar.lz4)** | Fri May 16 2025 08:16:31 UTC | `Avail DA Mainnet` | 4.2G | 1364759 | `a4f1a62c86f0c19e9a262f311dfab3ad572c358174c0e3aacd25bfd3dcab2dd3` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1369073.tar.lz4"

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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_1369073.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
