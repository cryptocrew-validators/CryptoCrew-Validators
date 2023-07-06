| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122347.tar.lz4) | Thu Jul  6 11:27:54 UTC 2023 | empowerchain-1 | 402M | 62a90b472658763b4dfc47fe7cd1cf819df9da22baa9f1562a0518026a5aca26 |
 
---
## download instructions
 
```sh
sudo apt install wget lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122347.tar.lz4
cd /home/empowerchain/.empowerd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
sha256sum -c `basename $URL`.sha256
lz4 -d `basename $URL` | tar xf -
cp ./priv_validator_state.json.tmp data/priv_validator_state.json
sudo systemctl start empowerd
rm ./priv_validator_state.json.tmp
```
*or (single-stream: no double disk-space needed, but slower and no possibility to check hash)*
```sh
cd /home/empowerchain/.empowerd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
cp ./priv_validator_state.json.tmp data/priv_validator_state.json
sudo systemctl start empowerd
rm ./priv_validator_state.json.tmp
```
## using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
