CryptoCrew provides daily node-snapshots for the chains we validate. You can use these snapshots to quickly sync your own node!
Latest snapshot kava version: `0.23.3`
| **DOWNLOAD** | date | chain_id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/kava_2222-10_5556376.tar.lz4)** | Sun Jul 09 2023 16:14:14 UTC | `kava_2222-10` | 25G | 5556376 | `2aa07fcbfce016af3f41ac3250fb66b0d39a8d3cda9142fb54b408017f560447` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/kava_2222-10_5542594.tar.lz4)** | Sat Jul 08 2023 16:48:06 UTC | `kava_2222-10` | 13G | 5556376 | `d5b628d96835c196eed250dc3186454e0b79bd89b25f16ac2e0c7cf524a6e48a` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_5556376.tar.lz4
cd $HOME/.kava
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
URL=https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_5556376.tar.lz4
cd $HOME/.kava
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/kava/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kava`
