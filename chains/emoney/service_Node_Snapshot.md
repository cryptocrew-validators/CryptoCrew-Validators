## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
emd version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2789797.tar.lz4)** | Sun Jan 07 2024 13:18:07 UTC | `emoney-3` | 344M | 2789797 | `03147b9e03becfd5ed3f58442f86fde98fd2cf5b5a8e81169b4a30144ebaee11` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2783825.tar.lz4)** | Fri Jan 05 2024 11:37:29 UTC | `emoney-3` | 73M | 2783825 | `b1e93631ba9be817c0e33045915bb15a0664c7296158564b031904dbe8a8a6f1` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2789797.tar.lz4"
cd $HOME/.emd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2789797.tar.lz4"
cd $HOME/.emd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/emoney/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start emd`

