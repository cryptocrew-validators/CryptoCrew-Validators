## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
teritorid version: `v2.0.6`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_8210049.tar.lz4)** | Sat Apr 06 2024 23:43:13 UTC | `teritori-1` | 1.1G | 8210049 | `73a8d38734b05379b5482f79b4a5045e48640b0803977d2c798cc588e0317775` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_8195143.tar.lz4)** | Fri Apr 05 2024 23:38:24 UTC | `teritori-1` | 942M | 8195143 | `f1882a832307f9b55dc2ecc90747d7f2b8a8c4931cc71285fd8bea55bf3bfb5c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_8210049.tar.lz4"
cd $HOME/.teritorid
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_8210049.tar.lz4"
cd $HOME/.teritorid
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_wasm.tar.lz4"
cd $HOME/.teritorid/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start teritorid`

