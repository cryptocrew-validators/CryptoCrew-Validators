## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2642851.tar.lz4)** | Sun Mar 08 2026 08:17:21 UTC | `Avail DA Mainnet` | 5.9G | 2642851 | `3f96c689195df8ce461787f917a21feb1773dd73a8f82d3ccffccd26b2aabc5c` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2638531.tar.lz4)** | Sat Mar 07 2026 08:17:31 UTC | `Avail DA Mainnet` | 5.9G | 2638531 | `ce122f77cd8f85a4d661459988009c2cc0158aedc9c9afeda8390a172b3da6f5` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2634211.tar.lz4)** | Fri Mar 06 2026 08:20:54 UTC | `Avail DA Mainnet` | 5.9G | 2634211 | `069f144b73abcbbb0cf3086d5671067722285f5762dce42399b5157d2608de46` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2630521.tar.lz4)** | Thu Mar 05 2026 11:50:43 UTC | `Avail DA Mainnet` | 5.9G | 2630521 | `daca834ac0ef43c082a27210704c16d8cf0ff313c7a522e482506cab421d8070` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2629891.tar.lz4)** | Thu Mar 05 2026 08:18:36 UTC | `Avail DA Mainnet` | 5.9G | 2629891 | `4de0ea241d753df7c932537fe95df242bd3efe6553036042d4309bcbdefadfda` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2626201.tar.lz4)** | Wed Mar 04 2026 11:50:19 UTC | `Avail DA Mainnet` | 5.9G | 2626201 | `fb71b1859aebbc636e1f939a8a75acca195795f78a7d3e74e4df376cc2345fde` |
---

## Download instructions
Download snapshot manually:
```sh
# Install dependencies
sudo apt install wget lz4

# Set your avail home directory
AVAIL_HOME=$HOME/avail/node-data/chains/avail_da_mainnet

# Set snapshot url
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2642851.tar.lz4"

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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2642851.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
