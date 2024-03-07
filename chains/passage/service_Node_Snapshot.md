## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
passage version: `v2.4.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/passage-2_7287281.tar.lz4)** | Thu Mar 07 2024 05:16:42 UTC | `passage-2` | 248M | 7287281 | `f87f6052e0eb3b33c28ff9841e9d7bee6e312f48c6462e30923f291d46884c07` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/passage-2_7272656.tar.lz4)** | Wed Mar 06 2024 05:16:51 UTC | `passage-2` | 292M | 7272656 | `0c390e8dc68c2fe1bd6311fb2e89d2a113ac213b1009fb0059997c57bfa52573` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/passage-2_7287281.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/passage-2_7287281.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/passage-2_wasm.tar.lz4"
cd $HOME/.passage
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/passage/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start passage`

