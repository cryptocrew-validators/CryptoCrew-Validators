## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
passage version: `v2.0.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_5159967.tar.lz4)** | Fri Oct 13 2023 07:18:18 UTC | `passage-2` | 331M | 5159967 | `f74c049054819b441728952fb196147f1ec355a760f2b2e2c778fe2ca3980312` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_5145543.tar.lz4)** | Thu Oct 12 2023 07:17:41 UTC | `passage-2` | 457M | 5145543 | `e77be0835b6f8d0edcf0f41269bf838389a163f7b58a4880ce2461f0f3069dcf` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_5159967.tar.lz4"
cd $HOME/.passage
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_5159967.tar.lz4"
cd $HOME/.passage
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_wasm.tar.lz4"
cd $HOME/.passage
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/passage/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start passage`

