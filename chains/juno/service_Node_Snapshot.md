## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
junod version: `v29.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_28258186.tar.lz4)** | Sun Jul 13 2025 11:35:22 UTC | `juno-1` | 14G | 28258186 | `01a66b49c62c6565da0d0fb460e3cfa4c3f0bc7f3ecd8ee16fd032ba83b0689f` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_28194808.tar.lz4)** | Fri Jul 11 2025 11:35:32 UTC | `juno-1` | 14G | 28194808 | `46d9c32bb37b41d42b904cdf87927ed555da02f99f5142387d7d3c0b803b3bc4` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_28258186.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/juno/juno-1_28258186.tar.lz4"
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

