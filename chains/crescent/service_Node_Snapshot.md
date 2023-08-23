CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
crescentd version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/crescent-1_.tar.lz4)** | Tue Aug 22 2023 17:21:01 UTC | `crescent-1` | 519M |  | `ce44da0bdfd3d49c368020315f6531c1b3db3ee9c71379a9c82cff12171b1bd0` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/crescent-1_8155758.tar.lz4)** | Wed Aug 23 2023 18:54:26 UTC | `crescent-1` | 1.8G | 8155758 | `e216555464c511aa2787f8cebb73a7b9201480b6d6d68092657df6371267b877` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8155758.tar.lz4
cd $HOME/.crescent
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget $URL
wget $URL.sha256
diff -s <(sha256sum `basename $URL` | awk '{print $1}') <(cat `basename $URL`.sha256)
lz4 -d `basename $URL` | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Or single-stream:**  
(no double disk-space needed, but slower and not possible to check checksum)
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8155758.tar.lz4
cd $HOME/.crescent
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/crescent/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start crescentd`
