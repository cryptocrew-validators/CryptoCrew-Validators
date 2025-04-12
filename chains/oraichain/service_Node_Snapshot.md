## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
oraid version: v0.50.9
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/Oraichain_56544357.tar.lz4)** | Fri Apr 11 2025 08:02:00 UTC | Oraichain | 8.92GB | 56544357 |  |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/Oraichain_56664795.tar.lz4)** | Sat Apr 12 2025 08:06:00 UTC | Oraichain | 9.23GB | 56664795 |  |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/Oraichain_56664795.tar.lz4"
cd $HOME/.oraid
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
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/Oraichain_56664795.tar.lz4"
cd $HOME/.oraid
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
### Optional: Download wasm folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases:
```sh
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/Oraichain_wasm.tar.lz4"
cd $HOME/.oraid
rm -rf wasm
wget -O - $URL | lz4 -d | tar xvf -
```
## Using the download script
The download script fully automates the process and preserves validator state. Run:
```sh
curl -sSL https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/oraichain/download_snapshot.sh | bash
```
---

After extracting, start the daemon:
`sudo systemctl start oraid`
