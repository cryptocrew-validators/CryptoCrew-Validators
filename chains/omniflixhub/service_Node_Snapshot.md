## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
omniflixhubd version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_13016108.tar.lz4)** | Tue Jul 16 2024 04:59:12 UTC | `omniflixhub-1` | 4.4G | 13016108 | `5529f43ba4a53b1b62002fe1c10dc6db4c042bced5b12484251036ddd002dfd2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_13008124.tar.lz4)** | Mon Jul 15 2024 16:02:34 UTC | `omniflixhub-1` | 4.4G | 13008124 | `be341cb09b4736fa417b7db8b63911e05281df4b0e9a4377621aa94581f089ee` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_13016108.tar.lz4"
cd $HOME/.omniflixhub
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_13016108.tar.lz4"
cd $HOME/.omniflixhub
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_wasm.tar.lz4"
cd $HOME/.omniflixhub
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start omniflixhubd`

