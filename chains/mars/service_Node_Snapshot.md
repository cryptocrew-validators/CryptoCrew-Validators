## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
marsd version: v1.0.1
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10987118.tar.lz4)** | Sun Jan 19 2025 16:17:18 UTC | mars-1 | 589322240B | 10987118 | d35577478319165e1e634081721c16beadc17a54f8b0a291bb1d6779b00707eb |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10987243.tar.lz4)** | Sun Jan 19 2025 16:28:00 UTC | mars-1 | 581324800B | 10987243 | 1a14ca919eefd102a88f3848d60d3c9dc70a70f17461c516aee3a899668e15cf |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10987243.tar.lz4"
cd $HOME/.mars
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
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10987243.tar.lz4"
cd $HOME/.mars
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
### Optional: Download wasm folder only
On this chain, the wasm folder is located under data/wasm. If statesync doesn't provide the wasm folder, you can grab it:
```sh
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_wasm.tar.lz4"
cd $HOME/.mars/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
The download script fully automates the process and preserves validator state. Run:
```sh
curl -sSL https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/download_snapshot.sh | bash
```
---

After extracting, start the daemon:
`sudo systemctl start marsd`
