## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
comdex version: `v11.4.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9623897.tar.lz4)** | Thu Sep 21 2023 13:22:33 UTC | `comdex-1` | 2.8G | 9623897 | `afb4dfa3b45881ba2e536f2833434e97c3e36a372182cdc8172a9dab8d1c6d65` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9609387.tar.lz4)** | Wed Sep 20 2023 13:41:50 UTC | `comdex-1` | 1.4G | 9609387 | `0f5566fa8a4b3e7888c3da741a2ffcd1c505ddfdd3358340f088888110b253d1` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9623897.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_9623897.tar.lz4"
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

