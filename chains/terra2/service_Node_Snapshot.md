## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
terrad version: `v2.12.4`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_12278551.tar.lz4)** | Sat Sep 28 2024 12:36:34 UTC | `phoenix-1` | 8.5G | 12278551 | `a3526abd1bc2628b295a14582fa77db1c8c2ab130ca040ccf1562a441f29eb03` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_12264266.tar.lz4)** | Fri Sep 27 2024 12:36:57 UTC | `phoenix-1` | 8.5G | 12264266 | `a41346161f1299598a804a6791bd50f0aac4726c1d613c64b498c0a6ca965ad6` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_12278551.tar.lz4"
cd $HOME/.terra
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_12278551.tar.lz4"
cd $HOME/.terra
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_wasm.tar.lz4"
cd $HOME/.terra/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/terra2/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start terrad`

