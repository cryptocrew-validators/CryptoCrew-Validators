## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
marsd version: `v1.0.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_5466127.tar.lz4)** | Sat Feb 03 2024 18:35:12 UTC | `mars-1` | 729M | 5466127 | `cddc228e541c6303db1af64a7813faf0cbaffba1f6261515bbb1ed7803fd89ab` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_5447963.tar.lz4)** | Fri Feb 02 2024 13:20:11 UTC | `mars-1` | 559M | 5447963 | `80ac1068c7eedf5601e5773ba2f3754b53705f54c78b450a48f6071e1cc92c08` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_5466127.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_5466127.tar.lz4"
cd $HOME/.mars
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_wasm.tar.lz4"
cd $HOME/.mars/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/mars/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start marsd`

