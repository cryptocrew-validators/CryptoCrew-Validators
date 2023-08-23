CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
junod version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/juno-1_9707826.tar.lz4)** | Wed Aug 23 2023 12:15:03 UTC | `juno-1` | 8.0G | 9707826 | `19d7ec5b21a22cb7adece076f01d6f24e496c2ad0f3d57f76eb81f4cc99eae2c` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/juno-1_9693585.tar.lz4)** | Tue Aug 22 2023 12:36:56 UTC | `juno-1` | 52G | 9693585 | `5929bf80884a4856762fc09f54ab64d3f8d30f9f4b0c9296edd9174cb5a69d1d` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/juno/juno-1_9707826.tar.lz4
cd $HOME/.juno
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/juno/juno-1_9707826.tar.lz4
cd $HOME/.juno
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/juno/juno-1_wasm.tar.lz4
cd $HOME/.juno/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/juno/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start junod`
