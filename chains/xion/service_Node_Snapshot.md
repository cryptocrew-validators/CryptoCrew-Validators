## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
xiond version: `v11.0.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3438749.tar.lz4)** | Thu Oct 17 2024 11:50:14 UTC | `xion-mainnet-1` | 1.1G | 3438749 | `a6716b238f11dd9a3013d56b3ea5362b524abe62fc9fcd432d93f3793f5280e8` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3420390.tar.lz4)** | Wed Oct 16 2024 11:45:19 UTC | `xion-mainnet-1` | 1.2G | 3420390 | `5effa5be66aa6f1758f9b19d05520b68dc29557aea23d04f4f6d7bc5e75e3d50` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3438749.tar.lz4"
cd $HOME/.xiond
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3438749.tar.lz4"
cd $HOME/.xiond
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_wasm.tar.lz4"
cd $HOME/.xiond
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start xiond`

