## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
akash version: `v0.38.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_23646689.tar.lz4)** | Wed Oct 08 2025 09:59:02 UTC | `akashnet-2` | 11G | 23646689 | `67abf14b6e849449692dfb337fdbe52cbbc1a731e06f473c712d986aa6e51849` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_23617472.tar.lz4)** | Mon Oct 06 2025 09:55:19 UTC | `akashnet-2` | 11G | 23617472 | `f8ff3bfb2cc1c5485e8ea4346ec4e928947e80cd0698ff2ef0814b6d0eb387f6` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_23646689.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_23646689.tar.lz4"
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

