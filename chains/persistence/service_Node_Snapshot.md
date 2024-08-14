## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
persistenceCore version: `v11.14.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/core-1_17986133.tar.lz4)** | Wed Aug 14 2024 11:41:32 UTC | `core-1` | 1.2G | 17986133 | `b81a54efc41fa92f1c381a4572ad4b0ff39b4a9f1f8a544fcef0b36b4ed22cdb` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/core-1_17971697.tar.lz4)** | Tue Aug 13 2024 11:36:14 UTC | `core-1` | 1.1G | 17971697 | `d91037bd15504874de3f7b6b305ffaadc6e5dc3c9b9ca08ed019f2f2f0d23fff` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/core-1_17986133.tar.lz4"
cd $HOME/.persistenceCore
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/core-1_17986133.tar.lz4"
cd $HOME/.persistenceCore
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/core-1_wasm.tar.lz4"
cd $HOME/.persistenceCore
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/persistence/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start persistenceCore`

