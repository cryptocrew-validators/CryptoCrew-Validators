## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
archwayd version: `v4.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/archway/archway-1_1849809.tar.lz4)** | Wed Nov 08 2023 00:27:59 UTC | `archway-1` | 823M | 1849809 | `bcf29fc10b384c51131ad21acc7dc27aef969a7393d9d8daf66b3b65ea28495f` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/archway/archway-1_1820593.tar.lz4)** | Mon Nov 06 2023 00:08:26 UTC | `archway-1` | 827M | 1820593 | `ed42fb4f0abcb1409c7b5aa0edf2259439f7a8417046e2b8bcadfb407f97e279` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/archway/archway-1_1849809.tar.lz4"
cd $HOME/.archway
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/archway/archway-1_1849809.tar.lz4"
cd $HOME/.archway
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/archway/archway-1_wasm.tar.lz4"
cd $HOME/.archway
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/archway/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start archwayd`

