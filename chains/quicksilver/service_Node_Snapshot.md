## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
quicksilverd version: `v1.8.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_13445664.tar.lz4)** | Thu Jul 03 2025 11:40:04 UTC | `quicksilver-2` | 127M | 13445664 | `` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_13415833.tar.lz4)** | Tue Jul 01 2025 11:40:04 UTC | `quicksilver-2` | 61M | 13415833 | `` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_13386007.tar.lz4)** | Sun Jun 29 2025 11:40:07 UTC | `quicksilver-2` | 375M | 13386007 | `` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_13445664.tar.lz4"
cd $HOME/.quicksilverd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_13445664.tar.lz4"
cd $HOME/.quicksilverd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_wasm.tar.lz4"
cd $HOME/.quicksilverd
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/quicksilver/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start quicksilverd`

