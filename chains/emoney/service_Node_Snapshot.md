## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
emd version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_3176719.tar.lz4)** | Thu May 23 2024 13:18:08 UTC | `emoney-3` | 335M | 3176719 | `48566826285716bfae0230e0911617f6597064bb2fc33b60175d0eb386224e14` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_3171030.tar.lz4)** | Tue May 21 2024 12:30:36 UTC | `emoney-3` | 337M | 3171030 | `9d40cd625ab12ad23b4fbef433b7c5760b1e5a7307702e9a2fd2e67167f884eb` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_3176719.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_3176719.tar.lz4"
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
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start emd`

