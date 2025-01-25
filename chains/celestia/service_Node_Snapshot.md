## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
celestia-appd version: `v3.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_3713741.tar.lz4)** | Sat Jan 25 2025 17:30:20 UTC | `celestia` | 5.9G | 3713741 | `a96d48ac6aa754b1a32b0abeec8ce6dde3df3565fe538a943413380c9555babb` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_3681054.tar.lz4)** | Thu Jan 23 2025 17:30:31 UTC | `celestia` | 6.0G | 3681054 | `528ebc6f7a8e55ac151d7e4dcd0b83e5b6706c606048640624fc7df11171b608` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_3713741.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_3713741.tar.lz4"
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

