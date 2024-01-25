## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
strided version: `v17.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_7390764.tar.lz4)** | Thu Jan 25 2024 11:21:47 UTC | `stride-1` | 3.0G | 7390764 | `9ead226b42820bd9c10f2de962c9d24289093f6be4aec640feb42cde1c5a7379` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_7376081.tar.lz4)** | Wed Jan 24 2024 11:32:19 UTC | `stride-1` | 3.1G | 7376081 | `fcefe25866a7cad37bcd49c5cfc0a40afe54cb630450c962c6bc225d10423bc0` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_7390764.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_7390764.tar.lz4"
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

