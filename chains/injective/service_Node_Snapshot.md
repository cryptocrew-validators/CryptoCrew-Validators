## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
injectived version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/injective-1_78970118.tar.lz4)** | Mon Jul 22 2024 10:05:08 UTC | `injective-1` | 20G | 78970118 | `72da32bd5c1d38bd10bce7a51aa97c3eae462382e0dc14b97ad7a7a933ac8081` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/injective-1_78965379.tar.lz4)** | Mon Jul 22 2024 09:05:18 UTC | `injective-1` | 20G | 78965379 | `a43cecb3a6495e06e26efbc4daa22d7954d03a02d20c6aaccf06cb0d07b54f5f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/injective-1_78970118.tar.lz4"
cd $HOME/.injectived
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/injective-1_78970118.tar.lz4"
cd $HOME/.injectived
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/injective-1_wasm.tar.lz4"
cd $HOME/.injectived
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/injective/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start injectived`

