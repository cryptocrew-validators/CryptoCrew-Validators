## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
celestia-appd version: `v5.0.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8032960.tar.lz4)** | Thu Oct 16 2025 12:17:38 UTC | `celestia` | 9.7G | 8032960 | `a031accbaa591b7d8dda5d3ebd650f1fbf324ccc5d0d8ef2e3b6e8c8f560f31b` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8016191.tar.lz4)** | Wed Oct 15 2025 12:18:11 UTC | `celestia` | 8.0G | 8016191 | `1684ef783fa2f081a0060a0b00956c63715ab384013efc8e7947603484b365ee` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8032960.tar.lz4"
cd $HOME/.celestia-app
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8032960.tar.lz4"
cd $HOME/.celestia-app
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start celestia-appd`

