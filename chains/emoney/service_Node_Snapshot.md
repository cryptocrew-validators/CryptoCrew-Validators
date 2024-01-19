## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
emd version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2823984.tar.lz4)** | Fri Jan 19 2024 11:16:34 UTC | `emoney-3` | 111M | 2823984 | `9e4da358967d134874944a8f901ca1975556156e77c9d79bc1deb7d723986b60` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2818420.tar.lz4)** | Wed Jan 17 2024 13:18:06 UTC | `emoney-3` | 336M | 2818420 | `3d9d728cece0442526dd539b7039d39d9e8b00b2df1b36225ab639a5d596fe1f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2823984.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2823984.tar.lz4"
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

