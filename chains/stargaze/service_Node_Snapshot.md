## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v15.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_17819161.tar.lz4)** | Tue Feb 18 2025 04:53:29 UTC | `stargaze-1` | 12G | 17819161 | `be33a66a87648b0ffd5345237d879fe66eaf58571cba1703ff48da3733ffd2b0` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_17794479.tar.lz4)** | Mon Feb 17 2025 04:52:25 UTC | `stargaze-1` | 11G | 17794479 | `b1cbf060dc1e520369a94be350970bb9bfd3bcd5a8934f88ede54cd6c66c7193` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_17819161.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_17819161.tar.lz4"
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

