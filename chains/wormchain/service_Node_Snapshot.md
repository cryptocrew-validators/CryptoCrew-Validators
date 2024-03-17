## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
wormchaind version: `v2.23.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/wormchain_7549292.tar.lz4)** | Sun Mar 17 2024 16:08:30 UTC | `wormchain` | 2.0G | 7549292 | `beb56345ef3a1732d4eb019abae4e48c42d05be0eb3d1addb5d81bf0b3b1d93c` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/wormchain_7533240.tar.lz4)** | Sat Mar 16 2024 14:06:17 UTC | `wormchain` | 2.0G | 7533240 | `ecee79430ceaffb172bc5de4ec0c5e3b947630c7648530c473fc57ac3d89d77b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/wormchain_7549292.tar.lz4"
cd $HOME/.wormchain
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/wormchain_7549292.tar.lz4"
cd $HOME/.wormchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/wormchain_wasm.tar.lz4"
cd $HOME/.wormchain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/wormchain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start wormchaind`

