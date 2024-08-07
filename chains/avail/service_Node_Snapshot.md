## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
avail-node version: `2.1.5-2de7256e7ff`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_147531.tar.lz4)** | Wed Aug 07 2024 12:30:35 UTC | `Avail DA Mainnet` | 684M | 147531 | `c29c289dccdeb4e40c54a54b1fae65a50d2d8e530c55dcc2fe942e254b2c6502` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_147502.tar.lz4)** | Wed Aug 07 2024 12:20:47 UTC | `Avail DA Mainnet` | 684M | 147502 | `45bf891e2f93740229fa3829689bcca23f536cd69c1ba1a7e95a8fc9b1787448` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_147531.tar.lz4"

# Download & extract snapshot
wget -O $URL
lz4 -d $(basename $URL) | tar xvf -C $AVAIL_HOME
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_147531.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
