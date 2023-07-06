| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122292.tar.lz4) | Thu Jul  6 11:22:55 UTC 2023 | empowerchain-1 | 418M | 534791050d200f8d54165c576c91ad79ee9f60a3f2c76bb838ed4e6e8ff40f0c  /home/service/SNAPSHOTS/empowerchain/empowerchain-1_122292.tar.lz4 |
 
---
## download instructions
 
```sh
sudo apt install wget lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122292.tar.lz4
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
