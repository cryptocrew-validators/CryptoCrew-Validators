## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
comdex version: `v11.4.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9565312.tar.lz4)** | Sun Sep 17 2023 13:40:17 UTC | `comdex-1` | 2.8G | 9565312 | `1383114a1934235942e1f4ac9e48b7534dbe405bae6daad6945488cc75ba5c05` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9549563.tar.lz4)** | Sat Sep 16 2023 11:51:43 UTC | `comdex-1` | 1.2G | 9549563 | `f3662108d8eb1fabe1e54377d477f0af872d7965cb65c82d2aa7f86b168a02ca` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9565312.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9565312.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_wasm.tar.lz4"
cd $HOME/.comdex
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/comdex/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start comdex`

