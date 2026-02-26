## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v17.0.0-2-g089c00d8`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_.tar.lz4)** | Thu Feb 26 2026 07:01:26 UTC | `stargaze-1` | 3.6G |  | `41b9fa5d5ff09dc802253aa23581c6fba17ed8d46c506d9a0e8c1855b35854a4` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_30183332.tar.lz4)** | Tue Feb 24 2026 06:32:33 UTC | `stargaze-1` | 2.7G | 30183332 | `23cd59e7587ae31aa8351711fc05f5fae44e6ecafc3cba2cb2d528f12bc56a33` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_30145982.tar.lz4)** | Mon Feb 23 2026 05:08:40 UTC | `stargaze-1` | 2.7G | 30145982 | `c2e095c66c5264b5ae65422fb6f284d4ef25d409fc36890384dbffcaad1c9713` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_.tar.lz4"
cd $HOME/.starsd
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_.tar.lz4"
cd $HOME/.starsd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_wasm.tar.lz4"
cd $HOME/.starsd
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start starsd`

