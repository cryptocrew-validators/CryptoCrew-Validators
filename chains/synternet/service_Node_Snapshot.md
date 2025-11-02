## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
syntd version: `v0.26.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_7720752.tar.lz4)** | Sun Nov 02 2025 15:16:12 UTC | `synternet-1` | 1.6G | 7720752 | `69f4b544f82f9045d92321e960a4dcb56e1a678c6a71b89d9f8a3f951197aaae` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_7674370.tar.lz4)** | Thu Oct 30 2025 15:16:28 UTC | `synternet-1` | 1.6G | 7674370 | `9c5d8dbbdba647a6e9407e9dbadc8b9f5751da401ed14ec6c1d153ffd969a04b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_7720752.tar.lz4"
cd $HOME/.amber
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_7720752.tar.lz4"
cd $HOME/.amber
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start syntd`

