## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v12.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_11280411.tar.lz4)** | Sat Dec 09 2023 06:54:45 UTC | `stargaze-1` | 2.7G | 11280411 | `482c8955427e15a48f0a6883b0cdc426626f3f31971484e533a8af9077597d71` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_11265752.tar.lz4)** | Fri Dec 08 2023 06:57:47 UTC | `stargaze-1` | 2.6G | 11265752 | `cfceb9e18d284bcf428668fb7261d2d5999f91f8f486b068738f0d807c4b6ad5` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_11280411.tar.lz4"
cd $HOME/.starsd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_11280411.tar.lz4"
cd $HOME/.starsd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_wasm.tar.lz4"
cd $HOME/.starsd
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/stargaze/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start starsd`

