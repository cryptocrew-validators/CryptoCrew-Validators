## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
celestia-appd version: `v3.4.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_4685842.tar.lz4)** | Sun Mar 30 2025 17:31:29 UTC | `celestia` | 8.1G | 4685842 | `a6fa46f1d1826546f1405784a393e1a2018ced97f57fce57aff7593b88dc3b93` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_4671668.tar.lz4)** | Sat Mar 29 2025 17:31:20 UTC | `celestia` | 7.3G | 4671668 | `8b7ca49342ac238765bc9c7f7120444b980417f5eac0e5bebb7ed102553ff47d` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_4685842.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_4685842.tar.lz4"
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

