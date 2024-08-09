## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
xiond version: `v9.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2209879.tar.lz4)** | Fri Aug 09 2024 11:50:11 UTC | `xion-mainnet-1` | 228M | 2209879 | `474140727aaea049956090911a1dd89e8b35e3fde13e57ed3548da44185ab564` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2193906.tar.lz4)** | Thu Aug 08 2024 11:45:17 UTC | `xion-mainnet-1` | 231M | 2193906 | `ed9572419148e9d6fa084addac2f63024404a4ec6a410a07f16d7f19dc55f460` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2209879.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2209879.tar.lz4"
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

