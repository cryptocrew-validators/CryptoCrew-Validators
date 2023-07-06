| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122793.tar.lz4) | Thu Jul  6 12:09:15 UTC 2023 | empowerchain-1 | 405M | 71eb51e73de4c70ba746ee22185f2048315e2c0da558c5858ceef9abb800bf1b |
 
---
## download instructions
 
```sh
sudo apt install wget lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122793.tar.lz4
cd $HOME/.empowerchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
diff <(sha256sum `basename $URL` | awk '{print $1}') <(cat `basename $URL`.sha256)
lz4 -d `basename $URL` | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
*or single-stream: (no double disk-space needed, but slower)*
```sh
sudo apt install wget lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122793.tar.lz4
cd $HOME/.empowerchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm || true
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start empowerd`
