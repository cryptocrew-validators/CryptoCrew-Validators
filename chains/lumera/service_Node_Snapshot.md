## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumerad version: `v1.9.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_3000276.tar.lz4)** | Tue Dec 30 2025 14:26:57 UTC | `lumera-mainnet-1` | 582M | 3000276 | `3d5a73c4addde31e77a8aeaefd60a0d8e1ddc28cc3a276254258cd1220ee276a` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2985026.tar.lz4)** | Mon Dec 29 2025 14:33:17 UTC | `lumera-mainnet-1` | 545M | 2985026 | `c261f91e2891fcd9a2d9638dc331ec0ca0837f964024d4e39e3d9c548e748c76` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_3000276.tar.lz4"
cd $HOME/.lumera
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_3000276.tar.lz4"
cd $HOME/.lumera
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_wasm.tar.lz4"
cd $HOME/.lumera
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumerad`

