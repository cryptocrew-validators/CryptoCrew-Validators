## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
centaurid version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_2248536.tar.lz4)** | Thu Nov 02 2023 23:48:49 UTC | `centauri-1` | 507M | 2248536 | `9f0d7479627cc378ba16d2696c6b145012b3ba198590fea012d35e33c8a5186f` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_2233411.tar.lz4)** | Wed Nov 01 2023 23:56:05 UTC | `centauri-1` | 733M | 2233411 | `9936114e67aa8f712b623efb94823d09d0e1773f81ec13498cfcc11bc845276c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_2248536.tar.lz4"
cd $HOME/.banksy
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm wasm_client_data
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_2248536.tar.lz4"
cd $HOME/.banksy
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm wasm_client_data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_wasm.tar.lz4"
cd $HOME/.banksy
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```

### Optional: Download `wasm_client_data` folder only
It is possible to statesync `centauri-1` when retaining the `$HOME/.banksy/wasm_client_data` folder. We provide daily updated wasm_client_data snapshots below:
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_wasm_client_data.tar.lz4"
cd $HOME/.banksy
rm -rf wasm_client_data
wget -O - $URL | lz4 -d | tar -xvf -
```

## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/composable/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start centaurid`

