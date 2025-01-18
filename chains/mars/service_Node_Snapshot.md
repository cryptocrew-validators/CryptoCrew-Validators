## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
marsd version: v1.0.1
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10970246.tar.lz4)** | Sat Jan 18 2025 16:17:15 UTC | mars-1 | 565862400B | 10970246 | e40dfacbdb27e44bcef3f1a66933c634daa1601561b2d9edb8c90c3d8da0279f |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10970465.tar.lz4)** | Sat Jan 18 2025 16:35:58 UTC | mars-1 | 841195520B | 10970465 | c0061b719354a02c2fb5727a2e727689a2fdcd750702f08467736aa1863fc9f6 |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10970465.tar.lz4"
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
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10970465.tar.lz4"
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
