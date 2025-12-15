## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dchain version: `v0.9.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1436742.tar.lz4)** | Mon Dec 15 2025 14:46:27 UTC | `test-theodoric-2` | 12M | 1436742 | `982ce6a561d2151f0647826790c3f03e5acfca9f01ce228c468b91f4c6ccc7e0` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1411238.tar.lz4)** | Sun Dec 14 2025 14:46:26 UTC | `test-theodoric-2` | 12M | 1411238 | `0c1dba1173972a635f837362b1a8f5e5b9e1131804c86f03232c8ab3ffd94226` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1385822.tar.lz4)** | Sat Dec 13 2025 14:46:26 UTC | `test-theodoric-2` | 13M | 1385822 | `7de62f75250dd76594c7275d12df92bcbc3461374df191502ccc1c5fe2e80800` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1360521.tar.lz4)** | Fri Dec 12 2025 14:54:52 UTC | `test-theodoric-2` | 8.3M | 1360521 | `e5edb92a3584c8e2dc413d9317b9c7d1aa1bffb66749442b4abbdd5d0ea1c3b7` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1436742.tar.lz4"
cd $HOME/.dchain
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_1436742.tar.lz4"
cd $HOME/.dchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_wasm.tar.lz4"
cd $HOME/.dchain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start dchain`

