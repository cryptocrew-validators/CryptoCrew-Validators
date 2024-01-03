## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
omniflixhubd version: `v0.12.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10124020.tar.lz4)** | Wed Jan 03 2024 04:57:03 UTC | `omniflixhub-1` | 3.0G | 10124020 | `a9a18b5dcfefe317a711d328afa4583ee95d697689cee88d281ce1150379874c` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10109109.tar.lz4)** | Tue Jan 02 2024 05:05:31 UTC | `omniflixhub-1` | 3.0G | 10109109 | `8b640c19d942445205d33d0d9311cdca77df73357a36272d2d7abc808e469bb8` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10124020.tar.lz4"
cd $HOME/.omniflixhub
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10124020.tar.lz4"
cd $HOME/.omniflixhub
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start omniflixhubd`

