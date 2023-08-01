CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!  
Latest snapshot marsd version: `v1.0.1`
| DOWNLOAD | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/mars-1_2706628.tar.lz4)** | Tue Aug 01 2023 17:26:24 UTC | `mars-1` | 1.2G | 2706628 | `b0ea0e182720eb8c0a7665ac043197ee53538082f7221320dfc97458d9593779` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/mars-1_2691584.tar.lz4)** | Mon Jul 31 2023 17:26:49 UTC | `mars-1` | 1.3G | 2691584 | `44fe200885120668f5c3c7cacd34f1b87d9e621794f1285ef3e6d518f9e0de88` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2706628.tar.lz4
cd $HOME/.mars
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2706628.tar.lz4
cd $HOME/.mars
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/mars/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start marsd`
