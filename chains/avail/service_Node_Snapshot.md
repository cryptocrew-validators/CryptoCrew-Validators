## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2302326.tar.lz4)** | Fri Dec 19 2025 11:48:17 UTC | `Avail DA Mainnet` | 5.6G | 2302326 | `d36215013f40ad3e10892f2506a00c0a6b1eebe7e1ccaec8b1c65a9c3b6b2e20` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2301696.tar.lz4)** | Fri Dec 19 2025 08:19:10 UTC | `Avail DA Mainnet` | 5.6G | 2301696 | `5e555566782d48378a3840de548ccab5eb7b0c8635a02e6ed80f4ab8056e38f4` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2302326.tar.lz4"

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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2302326.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
