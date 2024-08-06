## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
xiond version: `v9.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2162226.tar.lz4)** | Tue Aug 06 2024 11:45:11 UTC | `xion-mainnet-1` | 212M | 2162226 | `158d328746422fea84ce3e319b550b8763a5031677708d5cc06b3225f82be8d2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2146437.tar.lz4)** | Mon Aug 05 2024 11:50:11 UTC | `xion-mainnet-1` | 219M | 2146437 | `20e00755e8666a8a8b54758f16c42dbdd13a85dc8e743e97fd9094b2627d4dfa` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2162226.tar.lz4"
cd $HOME/.xiond
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_2162226.tar.lz4"
cd $HOME/.xiond
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_wasm.tar.lz4"
cd $HOME/.xiond
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start xiond`

