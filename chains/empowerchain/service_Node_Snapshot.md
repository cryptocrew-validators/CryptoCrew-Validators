| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_123935.tar.lz4) | Thu Jul  6 01:55:13 PM UTC 2023 | empowerchain-1 | 396M | 5ebf6d98788f620f319970e6386eb0d9d456ffb63319cf0e28543035e1cb5c63 |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_123740.tar.lz4) | Thu Jul  6 01:37:06 PM UTC 2023 | empowerchain-1 | 397M | 53c4c3d3f51c9231fa63c1400cbce139c6d9a1e06ac616ab20a5de90b2d7bd5d |
 
---
## download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_123935.tar.lz4
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
*or single-stream: (no double disk-space needed, but slower and not possible to check checksum)*
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_123935.tar.lz4
cd /home/empowerchain/.empowerd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start empowerd`
