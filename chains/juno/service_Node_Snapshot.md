## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
junod version: `v29.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_31439769.tar.lz4)** | Tue Oct 21 2025 11:38:09 UTC | `juno-1` | 18G | 31439769 | `6a83cdc0af6d3284af1769ca9344e82752575c7537ec7dd7b39b27849a1e3743` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_31375774.tar.lz4)** | Sun Oct 19 2025 11:36:17 UTC | `juno-1` | 18G | 31375774 | `105c9d9f65d5332d5d62bc979f1a3f55b18fb2d85449324a732a376731c53acd` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_31439769.tar.lz4"
cd $HOME/.juno
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_31439769.tar.lz4"
cd $HOME/.juno
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_wasm.tar.lz4"
cd $HOME/.juno/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start junod`

