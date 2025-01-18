## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
marsd version: v1.0.1
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10968395.tar.lz4)** | Sat Jan 18 2025 13:39:11 UTC | mars-1 | 598538240B | 10968395 | e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |
| **[DOWNLOAD](https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10969162.tar.lz4)** | Sat Jan 18 2025 14:44:44 UTC | mars-1 | 552888320B | 10969162 | 919b845bb2880e0de71d086e30c84bc21ed91a7df1c048c278447be974a8163c |
| **[DOWNLOAD](https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10969271.tar.lz4)** | Sat Jan 18 2025 14:53:59 UTC | mars-1 | 564664320B | 10969271 | 585148f4a2a7df369115243a88231c481061f4c54eedb308c6c3efb0347a4e8c |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10969271.tar.lz4"
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
URL="https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_10969271.tar.lz4"
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
URL="https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/mars-1_wasm.tar.lz4"
cd $HOME/.mars/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
The download script fully automates the process and preserves validator state. Run:
```sh
curl -sSL https://nbg1.your-objectstorage.com/SNAPSHOTS/mars/download_snapshot.sh | bash
```
---

After extracting, start the daemon:
`sudo systemctl start marsd`
