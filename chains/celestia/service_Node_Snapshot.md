## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
celestia-appd version: `v5.0.11`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8217932.tar.lz4)** | Mon Oct 27 2025 12:22:46 UTC | `celestia` | 29G | 8217932 | `7228f76142f85cc6bc5ace3f81c3595efc957129184c007fbf30fc3ac7bbed83` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8201044.tar.lz4)** | Sun Oct 26 2025 12:20:23 UTC | `celestia` | 27G | 8201044 | `769ec74fcae2d804e9fb4f0a5570bdf9b44b50a4634b72648175db99e04f1860` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8217932.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/celestia/celestia_8217932.tar.lz4"
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

