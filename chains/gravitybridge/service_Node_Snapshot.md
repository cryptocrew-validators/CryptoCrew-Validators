CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot gravity version: `vantares`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/gravity-bridge-3_7925002.tar.lz4)** | Fri Aug 04 2023 15:34:10 UTC | `gravity-bridge-3` | 71G | 7925002 | `f61a4cf8ec01bffdaff3bc3b6e61d8b905129dcf059fdc8c06fab1c02e2a088b` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/gravity-bridge-3_7913254.tar.lz4)** | Thu Aug 03 2023 18:34:50 UTC | `gravity-bridge-3` | 71G | 7913254 | `d88641dfb05df8eb2a4c1e2cb3128fe715e3e709227846f8ddda049dc379a506` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_7925002.tar.lz4
cd $HOME/.gravity
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_7925002.tar.lz4
cd $HOME/.gravity
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gravity`
