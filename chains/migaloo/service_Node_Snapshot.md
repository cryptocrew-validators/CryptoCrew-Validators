## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
migalood version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4194780.tar.lz4)** | Mon Nov 20 2023 00:50:21 UTC | `migaloo-1` | 582M | 4194780 | `6b6b7ced1d8011bb8c4ee4e0d8defe9870f1f5c1c3ad288624ebd6cf0c1086f8` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4164649.tar.lz4)** | Sat Nov 18 2023 00:58:14 UTC | `migaloo-1` | 498M | 4164649 | `147e6148bd917ec0a765c2962cc0aabd4ee3672780d11424561a1ebc091115b9` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4194780.tar.lz4"
cd $HOME/.migalood
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4194780.tar.lz4"
cd $HOME/.migalood
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_wasm.tar.lz4"
cd $HOME/.migalood
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/migaloo/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start migalood`

