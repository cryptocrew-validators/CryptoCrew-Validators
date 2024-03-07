## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
centaurid version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_4131945.tar.lz4)** | Thu Mar 07 2024 00:34:18 UTC | `centauri-1` | 589M | 4131945 | `0a782f98141d2e4e405d48cf0a9ed3eb81f355ec2fa8a66c6136714fac7ca38c` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_4116371.tar.lz4)** | Tue Mar 05 2024 23:51:51 UTC | `centauri-1` | 1.3G | 4116371 | `14d5eddabf09998f3dcfc52b5f455adc745a96b8c7d9974751ba6c3416f2db29` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_4131945.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_4131945.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_wasm.tar.lz4"
cd $HOME/.banksy
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```

### Optional: Download `wasm_client_data` folder only
It is possible to statesync `centauri-1` when retaining the `$HOME/.banksy/wasm_client_data` folder. We provide daily updated wasm_client_data snapshots below:
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/centauri-1_wasm_client_data.tar.lz4"
cd $HOME/.banksy
rm -rf wasm_client_data
wget -O - $URL | lz4 -d | tar -xvf -
```

## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/composable/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start centaurid`

