## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
emd version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2983071.tar.lz4)** | Fri Mar 15 2024 13:18:11 UTC | `emoney-3` | 458M | 2983071 | `a0889da5a31b0f7d6a20ac1fb246953dd7bfd5c8b4ebac2f335289e062a7f1a8` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2977409.tar.lz4)** | Wed Mar 13 2024 13:18:11 UTC | `emoney-3` | 438M | 2977409 | `8697c487dcde4c891011c01ed11edd2f309867f8d902b7d772433af902462da9` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2983071.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2983071.tar.lz4"
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

