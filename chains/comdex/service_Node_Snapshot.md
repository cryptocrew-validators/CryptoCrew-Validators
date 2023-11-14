## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
comdex version: `v11.5.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_10419020.tar.lz4)** | Tue Nov 14 2023 11:46:47 UTC | `comdex-1` | 1.2G | 10419020 | `c54f85e8f6710617b6c38d981323b5401bb00981abfaf7aaf3075283a31480d0` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_10404296.tar.lz4)** | Mon Nov 13 2023 11:55:15 UTC | `comdex-1` | 3.2G | 10404296 | `01c485581d3e3c37c32f36e8d30067105de1a58a718f7501023734ea787b37f8` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_10419020.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_10419020.tar.lz4"
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

