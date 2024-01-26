## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
injectived version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/injective-1_.tar.lz4)** | Fri Jan 26 2024 18:08:18 UTC | `injective-1` | 4.9G |  | `cb04904ad4d878afed603939d7df77a8b4e8852e31580ae4002a89ef5ab05169` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/injective-1_.tar.lz4)** | Fri Jan 26 2024 18:08:18 UTC | `injective-1` | 4.9G |  | `cb04904ad4d878afed603939d7df77a8b4e8852e31580ae4002a89ef5ab05169` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/injective-1_58599306.tar.lz4)** | Fri Jan 26 2024 18:07:32 UTC | `injective-1` | 9.9G | 58599306 | `8f2e4f49288f441b1909ca01d3809629a9c4f95eb94004a29827699258bb2fc0` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/injective-1_58599306.tar.lz4)** | Fri Jan 26 2024 18:07:32 UTC | `injective-1` | 9.9G | 58599306 | `8f2e4f49288f441b1909ca01d3809629a9c4f95eb94004a29827699258bb2fc0` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/injective/injective-1_58599306.tar.lz4"
cd $HOME/.injectived
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
diff -s <(sha256sum $(basename $URL) | awk '{print $1}') <(cat $(basename $URL).sha256)
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/injective/injective-1_58599306.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/injective/injective-1_wasm.tar.lz4"
cd $HOME/.injectived
rm -rf wasm
wget -O - \$URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/injective/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start injectived`

