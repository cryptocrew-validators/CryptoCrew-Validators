## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
akash version: `v0.38.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20614907.tar.lz4)** | Thu Mar 13 2025 12:58:06 UTC | `akashnet-2` | 14G | 20614907 | `3cc4d3b222e59a6250ddc9ce1a2cc8ea01f76bfc30d9680518efaa4a845010f7` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20589659.tar.lz4)** | Tue Mar 11 2025 09:51:11 UTC | `akashnet-2` | 9.6G | 20589659 | `afc5f60b1e76bac3b315153628ed28ad8b9ec3d7d1c7340b3a4261d56faf0155` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20614907.tar.lz4"
cd $HOME/.akash
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20614907.tar.lz4"
cd $HOME/.akash
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start akash`

