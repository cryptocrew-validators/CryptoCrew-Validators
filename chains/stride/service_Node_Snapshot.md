## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
strided version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6180188.tar.lz4)** | Sat Nov 04 2023 11:42:12 UTC | `stride-1` | 2.3G | 6180188 | `eb8aeb474df9196a7e9bd91ed5e458d591e77d4045159c2d8a430592c9dda2e3` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6165538.tar.lz4)** | Fri Nov 03 2023 11:49:21 UTC | `stride-1` | 2.6G | 6165538 | `73588fbf0cffdedb9703b1924804eb22a7ddb8592501a14d072b47c8b6126e4f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6180188.tar.lz4"
cd $HOME/.stride
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6180188.tar.lz4"
cd $HOME/.stride
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/stride/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start strided`

