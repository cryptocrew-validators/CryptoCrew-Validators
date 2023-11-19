## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
strided version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6401293.tar.lz4)** | Sun Nov 19 2023 11:50:11 UTC | `stride-1` | 3.2G | 6401293 | `020e4728a1e29baf591aa7cfdef3f2db2b4aab85fea638c93d617bffedcb1bae` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6386300.tar.lz4)** | Sat Nov 18 2023 11:27:04 UTC | `stride-1` | 2.8G | 6386300 | `266dbb506db304ae943d098b5dd3786cca1e208c67ebdc5e53d96ab3c6172955` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6401293.tar.lz4"
cd $HOME/.stride
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget $URL
wget $URL.sha256
echo $(cat $(basename $URL.sha256)) $(basename $URL) | sha256sum --check
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6401293.tar.lz4"
cd $HOME/.stride
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/stride/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start strided`

