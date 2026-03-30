## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
nolusd version: `v0.8.2-patch`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_21661458.tar.lz4)** | Mon Mar 30 2026 01:58:09 UTC | `pirin-1` | 475M | 21661458 | `e5f0e2db031233984bbb01597f82321553e4d7bb7ab0a3252eac186d8188693d` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_21632862.tar.lz4)** | Sun Mar 29 2026 01:58:29 UTC | `pirin-1` | 467M | 21632862 | `7f0aacc27fb6f3bf686d3d540ac574040b2461aefafe28ca83b1cc6a07c6cff4` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_21661458.tar.lz4"
cd $HOME/.nolus
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_21661458.tar.lz4"
cd $HOME/.nolus
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_wasm.tar.lz4"
cd $HOME/.nolus
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start nolusd`

