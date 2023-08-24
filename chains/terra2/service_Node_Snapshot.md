CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
terrad version: `v2.4.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/phoenix-1_6525371.tar.lz4)** | Thu Aug 24 2023 12:41:51 UTC | `phoenix-1` | 5.9G | 6525371 | `48e987b186776cbd9af741b745f390712d4d3fdaa48dbefedd4c7d43a75ba385` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/phoenix-1_6509898.tar.lz4)** | Wed Aug 23 2023 11:14:05 UTC | `phoenix-1` | 9.9G | 6509898 | `475eb21cc7883e1b745de1b72baee090f9b73f6b5b57c8eca15c536ad6d7f2c6` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_6525371.tar.lz4
cd $HOME/.terra
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_6525371.tar.lz4
cd $HOME/.terra
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_wasm.tar.lz4
cd $HOME/.terra/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/terra2/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start terrad`
