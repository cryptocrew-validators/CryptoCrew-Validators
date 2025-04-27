## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dymd version: `v3.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6870082.tar.lz4)** | Sun Apr 27 2025 16:51:02 UTC | `dymension_1100-1` | 3.2G | 6870082 | `6a4455cc1664b4d455d16266fd836b190f5c23425e48990deb91b9a5a624d98d` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6854512.tar.lz4)** | Sat Apr 26 2025 17:00:51 UTC | `dymension_1100-1` | 3.0G | 6854512 | `747fbba58895586dcd42d89c666dd25f4879b2f166e5ea9acac30b4da78e0f3b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6870082.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_6870082.tar.lz4"
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

