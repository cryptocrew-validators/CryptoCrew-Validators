## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
cheqd-noded version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12222935.tar.lz4)** | Fri Mar 01 2024 02:17:55 UTC | `cheqd-mainnet-1` | 110G | 12222935 | `e571190e7f058b560aecc93529116190d2878a23f1bfdfbfc682af98b6c3cc3f` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12208258.tar.lz4)** | Thu Feb 29 2024 03:04:22 UTC | `cheqd-mainnet-1` | 117G | 12208258 | `cc12946c447caaf98107101f7d75d85f57c8d197ddb3c86ea90aedfdc200a6f1` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12222935.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12222935.tar.lz4"
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

