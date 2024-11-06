## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
xiond version: `v14.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3791354.tar.lz4)** | Wed Nov 06 2024 11:45:22 UTC | `xion-mainnet-1` | 1.4G | 3791354 | `be42ebf659ab38105625ef5618d3211d6a452e437f26d11d4f3ba80c0bb5b7ee` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3774030.tar.lz4)** | Tue Nov 05 2024 11:50:16 UTC | `xion-mainnet-1` | 1.2G | 3774030 | `195f62b61df04b429ac0ca70be20231ea4fa7de1a46ce86be5a3ba3ae37dbc7a` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3791354.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_3791354.tar.lz4"
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

