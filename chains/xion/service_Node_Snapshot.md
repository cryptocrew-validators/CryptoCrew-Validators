## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
xiond version: `v14.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_4857146.tar.lz4)** | Mon Jan 06 2025 11:46:22 UTC | `xion-mainnet-1` | 5.4G | 4857146 | `5491bdb5a9835f431b30c85dad7d2baca00ee6972fc730c7dd4f8aca9a030945` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_4839378.tar.lz4)** | Sun Jan 05 2025 11:50:52 UTC | `xion-mainnet-1` | 4.7G | 4839378 | `e761d9e4e4ceb6914c227d89029283759d141711e1e16ad6351713b710d9cf98` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_4857146.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/xion/xion-mainnet-1_4857146.tar.lz4"
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

