CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot terrad version: `vv2.3.4`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/phoenix-1_5882146.tar.lz4)** | Mon Jul 10 2023 18:39:23 UTC | `phoenix-1` | 54G | 5882146 | `b638c7fba8904b5b9fa15b29f23a3eec9ad96d245a7bce7591b2456bc4f8d3d2` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/phoenix-1_5867805.tar.lz4)** | Sun Jul 09 2023 17:55:14 UTC | `phoenix-1` | 97G | 5867805 | `80141b87a29acff1a6e45c82be1f719c678e4541b401ebdd4fe71fb4dbf40019` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_5882146.tar.lz4
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
*Or single-stream: (no double disk-space needed, but slower and not possible to check checksum)*
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/terra2/phoenix-1_5882146.tar.lz4
cd $HOME/.terra
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/terra2/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start terrad`
