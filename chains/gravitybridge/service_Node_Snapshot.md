CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot gravity version: `vantares`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/gravity-bridge-3_7999424.tar.lz4)** | Thu Aug 10 2023 15:34:52 UTC | `gravity-bridge-3` | 74G | 7999424 | `e3669a1e7c7dcbed80c64ab91080338f087cd5560d9342ba7b96080517cd6fdf` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/gravity-bridge-3_7987538.tar.lz4)** | Wed Aug 09 2023 17:13:25 UTC | `gravity-bridge-3` | 73G | 7987538 | `268a8f8bf7ce243fbd43bf2993b8091209863bfc2914a80a6a008931a28a01b6` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_7999424.tar.lz4
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_7999424.tar.lz4
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
