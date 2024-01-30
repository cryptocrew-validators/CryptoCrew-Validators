## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
teritorid version: `v2.0.6`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_7217029.tar.lz4)** | Tue Jan 30 2024 23:44:01 UTC | `teritori-1` | 1003M | 7217029 | `c2c4e7400cc8d8d19082efb651cd8417fb1ad2a6a28f1750fe449d26a6ddd560` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_7203427.tar.lz4)** | Tue Jan 30 2024 01:39:47 UTC | `teritori-1` | 2.3G | 7203427 | `761d5a0d6a5da16a39172c3caffdc1bce9ed0dbf507272e2332aaf76e60a4349` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_7217029.tar.lz4"
cd $HOME/.teritorid
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_7217029.tar.lz4"
cd $HOME/.teritorid
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_wasm.tar.lz4"
cd $HOME/.teritorid/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/teritori/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start teritorid`

