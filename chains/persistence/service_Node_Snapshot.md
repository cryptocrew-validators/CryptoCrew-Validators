CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
persistenceCore version: `v7.0.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/core-1_12875331.tar.lz4)** | Thu Aug 24 2023 13:44:43 UTC | `core-1` | 515M | 12875331 | `a08ba5acb51e439923eea62c6c7ac9873845d5d8bf8aa966f2cf6f05be91c065` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/core-1_12859630.tar.lz4)** | Wed Aug 23 2023 12:12:37 UTC | `core-1` | 3.3G | 12859630 | `a26ac56e5bd9d200bf2349831dcc2f448129fda74b21549d8a75136f81415f2a` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/persistence/core-1_12875331.tar.lz4
cd $HOME/.persistenceCore
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
diff -s <(sha256sum `basename $URL` | awk '{print $1}') <(cat `basename $URL`.sha256)
lz4 -d `basename $URL` | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Or single-stream:**  
(no double disk-space needed, but slower and not possible to check checksum)
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/persistence/core-1_12875331.tar.lz4
cd $HOME/.persistenceCore
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/persistence/core-1_wasm.tar.lz4
cd $HOME/.persistenceCore
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/persistence/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start persistenceCore`
