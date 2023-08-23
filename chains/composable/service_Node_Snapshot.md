CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
centaurid version: `vlatest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/centauri-1_1186178.tar.lz4)** | Wed Aug 23 2023 23:43:43 UTC | `centauri-1` | 367M | 1186178 | `a5cf5bc656fad51446df90d5ee96509394db9bce3647ab2653ec37b304e104d4` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/centauri-1_1171241.tar.lz4)** | Tue Aug 22 2023 23:44:37 UTC | `centauri-1` | 753M | 1171241 | `5211bcd9cf96724a3af8fc097c95bfce321e004a761950a1c2fdb2a2cf8e868e` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_1186178.tar.lz4
cd $HOME/.banksy
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm wasm_client_data
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_1186178.tar.lz4
cd $HOME/.banksy
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm wasm_client_data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/composable/centauri-1_wasm.tar.lz4
cd $HOME/.banksy
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/composable/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start centaurid`
