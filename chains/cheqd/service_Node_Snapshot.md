## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
cheqd-noded version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12457128.tar.lz4)** | Sun Mar 17 2024 01:08:30 UTC | `cheqd-mainnet-1` | 122G | 12457128 | `6dcc00a86466e977d5abdcb6b0c4cb6c7aa3b15ba17d422c358b1e4c592016cc` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12443617.tar.lz4)** | Sat Mar 16 2024 02:20:15 UTC | `cheqd-mainnet-1` | 114G | 12443617 | `8d295e9ccae60ec3a671c959e3af6e191b30079cc1bd09ee4b586a9698c398cc` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12457128.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_12457128.tar.lz4"
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

