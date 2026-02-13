## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dchain version: `v0.10.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_2957007.tar.lz4)** | Fri Feb 13 2026 12:39:57 UTC | `test-theodoric-2` | 16M | 2957007 | `c8f18115312ee492b5680a5c6a88bb7f5361f49baa4595637a0b66533f17be02` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_2931642.tar.lz4)** | Thu Feb 12 2026 12:40:43 UTC | `test-theodoric-2` | 11M | 2931642 | `7c75d37c52e25bc9bbe522a40d7ea1a904dce467c194be804920d7e6ece39d6f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_2957007.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/dchaintestnet/test-theodoric-2_2957007.tar.lz4"
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

