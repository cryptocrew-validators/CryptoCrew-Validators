## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-0ad548d4817`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2029602.tar.lz4)** | Fri Oct 17 2025 08:17:12 UTC | `Avail DA Mainnet` | 5.3G | 2029602 | `20eb52ed9776e2f33771c5a57ad4645ab99d291e90cb016d354d330f16201a52` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2025282.tar.lz4)** | Thu Oct 16 2025 08:17:07 UTC | `Avail DA Mainnet` | 5.3G | 2025282 | `82c5119a83b1f19f7d5582fc35dbe33861d23a3964ecfdfca37849edfd9dc65d` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2029602.tar.lz4"

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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2029602.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
