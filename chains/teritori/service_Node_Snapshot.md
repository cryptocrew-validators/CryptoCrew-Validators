## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
teritorid version: `v2.0.6`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_12647977.tar.lz4)** | Mon Jan 27 2025 00:06:25 UTC | `teritori-1` | 908M | 12647977 | `a1770e0b741853caa09c7aea60637aad55a31907be53d6e6e37e2b0d0f75022e` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_12617738.tar.lz4)** | Sat Jan 25 2025 00:08:07 UTC | `teritori-1` | 12M | 12617738 | `` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_12602369.tar.lz4)** | Thu Jan 23 2025 23:47:47 UTC | `teritori-1` | 768M | 12602369 | `` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_12647977.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_12647977.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/teritori-1_wasm.tar.lz4"
cd $HOME/.teritorid/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/teritori/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start teritorid`

