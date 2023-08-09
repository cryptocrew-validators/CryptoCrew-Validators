CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot passage version: `v2.0.0`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/passage-2_4215453.tar.lz4)** | Wed Aug 09 2023 06:02:37 UTC | `passage-2` | 925M | 4215453 | `3e9b31d0517c071cd8fbf79dea3cc9986288c23f8e24907fcfaf1092af351fec` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/passage-2_4200726.tar.lz4)** | Tue Aug 08 2023 06:03:03 UTC | `passage-2` | 749M | 4200726 | `c9698f4f7395ee91c2a56a55437e8cedacff2361ce9e0bfabd52569f3a6c5fa4` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_4215453.tar.lz4
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
*Or single-stream: (no double disk-space needed, but slower and not possible to check checksum)*
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/passage/passage-2_4215453.tar.lz4
cd $HOME/.passage
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/passage/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start passage`
