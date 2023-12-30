## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
comdex version: `v13.4.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_11094585.tar.lz4)** | Sat Dec 30 2023 13:41:16 UTC | `comdex-1` | 1.8G | 11094585 | `4a2ac8c115538bb96fc9726d0ebfdc7bc1833c41a914e4e2fe80a113ced8c650` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_11079800.tar.lz4)** | Fri Dec 29 2023 13:39:45 UTC | `comdex-1` | 1.9G | 11079800 | `10a6608cde94facbbf6ba620792f4337e7a0484ba875b4d441dae47dda354faf` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_11094585.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/comdex/comdex-1_11094585.tar.lz4"
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

