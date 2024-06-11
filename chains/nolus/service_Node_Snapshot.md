## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
nolusd version: `v0.5.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_5729031.tar.lz4)** | Tue Jun 11 2024 00:50:48 UTC | `pirin-1` | 774M | 5729031 | `ddf46420d9339b4e5c480d75b21fd5d5bff923dec6c5f776647fb6c13ed96894` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_5714725.tar.lz4)** | Mon Jun 10 2024 01:51:23 UTC | `pirin-1` | 839M | 5714725 | `ffc889174681b51781ff6076917622629e587a21ed8c0b2586434b322a6c6dd4` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_5729031.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_5729031.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_wasm.tar.lz4"
cd $HOME/.nolus
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/nolus/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start nolusd`

