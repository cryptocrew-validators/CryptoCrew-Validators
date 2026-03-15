## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
 
- `avail-node` version: `2.3.4-92228be58bc`
- pruning: `pruned 256`
 
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2673091.tar.lz4)** | Sun Mar 15 2026 08:17:13 UTC | `Avail DA Mainnet` | 5.9G | 2673091 | `5f383ba179367def4c911e71458a55d49c6d243700ca9b187ccb8a7801873971` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2668771.tar.lz4)** | Sat Mar 14 2026 08:17:56 UTC | `Avail DA Mainnet` | 5.9G | 2668771 | `f7798c41908470da096836604e286981581bfd11660ef415bab40d4636bd949b` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2664451.tar.lz4)** | Fri Mar 13 2026 08:19:59 UTC | `Avail DA Mainnet` | 5.9G | 2664451 | `c381bc7ebf9e8d331ce56bbad2bd3348e9bf150016ee10d584791d6fd3fa7ad2` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2660131.tar.lz4)** | Thu Mar 12 2026 08:18:03 UTC | `Avail DA Mainnet` | 5.9G | 2660131 | `808e3ff612f972e343aff0e27158b6c06f9e6a752c2191c750c7a977e3685186` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2655811.tar.lz4)** | Wed Mar 11 2026 08:20:26 UTC | `Avail DA Mainnet` | 5.9G | 2655811 | `0f1da07e3fe63ca442fd7a7abac9ec5d8b49a26557ea8ac813e7306998507140` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2651491.tar.lz4)** | Tue Mar 10 2026 08:19:21 UTC | `Avail DA Mainnet` | 5.9G | 2651491 | `d27408abbd23742e4d736c8c359bc15e419432e61931b399132da787475305a0` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2647171.tar.lz4)** | Mon Mar 09 2026 08:18:45 UTC | `Avail DA Mainnet` | 5.9G | 2647171 | `4a6507d86199c18b727e5a2541d1b1b24d8115ba7c731613629411ce816a5971` |
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2673091.tar.lz4"

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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/avail/Avail_DA_Mainnet_2673091.tar.lz4"

# Download & extract snapshot
wget -O - $URL | lz4 -d | tar -xvf - -C $AVAIL_HOME
```

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start avail-node`
