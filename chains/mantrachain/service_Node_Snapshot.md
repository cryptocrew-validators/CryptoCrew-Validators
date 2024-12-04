## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
mantrachaind version: `v1.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1352821.tar.lz4)** | Wed Dec 04 2024 08:12:02 UTC | `mantra-1` | 2.9G | 1352821 | `b7ee1d80764b083791bd32131783d0b0d2a37ec7cd738f76fe6978c5a8c2d2b2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1328027.tar.lz4)** | Tue Dec 03 2024 08:11:57 UTC | `mantra-1` | 2.8G | 1328027 | `395a173e63404a2d0fca8809532ff9f21b77991bff0884cf520b77752b4c97dc` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1352821.tar.lz4"
cd $HOME/.mantrachain
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1352821.tar.lz4"
cd $HOME/.mantrachain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_wasm.tar.lz4"
cd $HOME/.mantrachain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start mantrachaind`

