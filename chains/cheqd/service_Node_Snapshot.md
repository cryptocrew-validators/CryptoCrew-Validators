## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
cheqd-noded version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12576111.tar.lz4)** | Mon Mar 25 2024 03:11:22 UTC | `cheqd-mainnet-1` | 124G | 12576111 | `44cbfb7a1098f936b51dd7bd46c5ddddea732e28d8faa1599a82f9d7dd4530c3` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12561414.tar.lz4)** | Sun Mar 24 2024 02:22:50 UTC | `cheqd-mainnet-1` | 116G | 12561414 | `5e24c333ac06a27cc4e75dbf59c37a43273cf28bda900945586566bbd3c6f349` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12576111.tar.lz4"
cd $HOME/.cheqdnode
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget $URL
wget $URL.sha256
echo $(cat $(basename $URL.sha256)) $(basename $URL) | sha256sum --check
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12576111.tar.lz4"
cd $HOME/.cheqdnode
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start cheqd-noded`

