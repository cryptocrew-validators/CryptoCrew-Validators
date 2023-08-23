CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
passage version: `v2.0.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/passage-2_4421332.tar.lz4)** | Wed Aug 23 2023 07:18:48 UTC | `passage-2` | 322M | 4421332 | `d55a043b6d4b9499f638e04a1503286956d4a85f0b956d007e2ba877afd66aca` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/passage-2_4405913.tar.lz4)** | Tue Aug 22 2023 06:04:03 UTC | `passage-2` | 2.0G | 4405913 | `2ca6710924424fb0a62ec9d659a3a082e9b63eae1957d46a82ccaa2daebaf348` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_4421332.tar.lz4
cd $HOME/.passage
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_4421332.tar.lz4
cd $HOME/.passage
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_wasm.tar.lz4
cd $HOME/.passage
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/passage/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start passage`
