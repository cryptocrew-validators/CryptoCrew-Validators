## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_22675123.tar.lz4)** | Sat Jul 26 2025 12:06:53 UTC | `stargaze-1` | 15G | 22675123 | `2f56a4de8929b084d576e9e46a47208cac35c254352308a8ebc4a0dd50770a5c` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_22631079.tar.lz4)** | Fri Jul 25 2025 04:53:13 UTC | `stargaze-1` | 15G | 22631079 | `4ce2b495f4e418046f0cfc9e0a8791796de09f91daf1cf4ff9f495dc77658731` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_22675123.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_22675123.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_wasm.tar.lz4"
cd $HOME/.starsd
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start starsd`

