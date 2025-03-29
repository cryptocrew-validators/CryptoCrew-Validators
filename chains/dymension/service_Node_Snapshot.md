## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dymd version: `v3.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6416128.tar.lz4)** | Sat Mar 29 2025 16:58:56 UTC | `dymension_1100-1` | 3.1G | 6416128 | `6efed860236029272c4b825398216396c9da3eac325b263e079dcfc8046e3f4f` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6400305.tar.lz4)** | Fri Mar 28 2025 16:40:21 UTC | `dymension_1100-1` | 2.8G | 6400305 | `b4b35249be0298cd84b4884a109de009416d9b3b135ee75c507992690ee76261` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6416128.tar.lz4"
cd $HOME/.dymension
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6416128.tar.lz4"
cd $HOME/.dymension
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start dymd`

