## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
zigchaind version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/zigchain-1_11551386.tar.lz4)** | Mon Aug 24 2026 16:38:37 UTC | `zigchain-1` | 318M | 11551386 | `55f2d8471e6aa2d4dd28e25ebc14108c8974bc5e78f8ceac86a47a6bc843225f` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/zigchain-1_11523916.tar.lz4)** | Sun Aug 23 2026 16:38:38 UTC | `zigchain-1` | 319M | 11523916 | `08600610d4880ff7dfe2fa5c11702eccc3b1f1a7a570f973e6616a211e0b88b0` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/zigchain-1_11551386.tar.lz4"
cd $HOME/.zigchain
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/zigchain-1_11551386.tar.lz4"
cd $HOME/.zigchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/zigchain-1_wasm.tar.lz4"
cd $HOME/.zigchain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/zigchain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start zigchaind`

