## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2332547.tar.lz4)** | Fri Dec 26 2025 11:46:33 UTC | `Avail DA Mainnet` | 5.6G | 2332547 | `43186c743183fd787a78c0ce32d08e4d8aacb7c1992dbb0b222d73e6c118bc8e` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2331917.tar.lz4)** | Fri Dec 26 2025 08:17:01 UTC | `Avail DA Mainnet` | 5.6G | 2331917 | `7de046f4ac9c287676d8a113ac60fe09f7370381f2d5e388be8b27f4603bdf35` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2332547.tar.lz4"

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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2332547.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
