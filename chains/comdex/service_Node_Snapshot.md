## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
comdex version: `v13.4.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_13500646.tar.lz4)** | Tue Jun 11 2024 11:49:20 UTC | `comdex-1` | 1.4G | 13500646 | `89805129cae76b9f67447a18736cd83916de7cbc00c8331864feafbeb973c83c` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_13486621.tar.lz4)** | Mon Jun 10 2024 12:05:31 UTC | `comdex-1` | 1.5G | 13486621 | `f5992e27054bb78860ce481aaaaf2ce890ba817d668d64e394150afcfc53071a` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_13500646.tar.lz4"
cd $HOME/.comdex
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_13500646.tar.lz4"
cd $HOME/.comdex
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_wasm.tar.lz4"
cd $HOME/.comdex
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/comdex/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start comdex`

