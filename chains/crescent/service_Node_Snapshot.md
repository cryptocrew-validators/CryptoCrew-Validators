## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
crescentd version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8380898.tar.lz4)** | Wed Sep 06 2023 18:39:13 UTC | `crescent-1` | 1.2G | 8380898 | `8890108a8e10fd7d6e5425851505b8abc0bc1cfb88fff5d82b7ec07ab7cc026e` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8364752.tar.lz4)** | Tue Sep 05 2023 18:37:20 UTC | `crescent-1` | 842M | 8364752 | `fced0c4744fccd9729fe0200b9b6be45523214fda4096cca656308ed8ffbafec` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8380898.tar.lz4"
cd $HOME/.crescent
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8380898.tar.lz4"
cd $HOME/.crescent
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/crescent/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start crescentd`

