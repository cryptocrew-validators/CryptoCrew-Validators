CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot empowerd version: `v1.0.0`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/empowerchain-1_590424.tar.lz4)** | Sat Aug 05 2023 14:35:24 UTC | `empowerchain-1` | 607M | 590424 | `433a9fc51bc361dac4b431c03073af5547430832873dd03dcb75aaa81d6d2c6e` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/empowerchain-1_574905.tar.lz4)** | Fri Aug 04 2023 14:35:16 UTC | `empowerchain-1` | 653M | 574905 | `56bbf299500ad58dda9a8a4856a8f833a8fc1eef92a595faa66d6b20a98df19a` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_590424.tar.lz4
cd /home/empowerchain/.empowerd
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_590424.tar.lz4
cd /home/empowerchain/.empowerd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start empowerd`
