## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
marsd version: v1.0.1
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_11037134.tar.lz4)** | Wed Jan 22 2025 15:26:04 UTC | mars-1 | 550.06MB | 11037134 |  |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_11037170.tar.lz4)** | Wed Jan 22 2025 15:29:03 UTC | mars-1 | 554.76MB | 11037170 | bbf5248c507186f5092aad86f7390b3fe00cdbbfffb79c20d7aa77ce8365aa06 |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_11037170.tar.lz4"
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
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_11037170.tar.lz4"
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
