## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
strided version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6238959.tar.lz4)** | Wed Nov 08 2023 11:26:58 UTC | `stride-1` | 2.6G | 6238959 | `fb7937e595cef37dffe44b61e7b663762fafdbb836ddc3ace3a781b61e51f561` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6224170.tar.lz4)** | Tue Nov 07 2023 11:20:27 UTC | `stride-1` | 2.5G | 6224170 | `f2151058e571ff2a235d9dc89368736e26a155fcd2f35857d409214ad261c669` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6238959.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/stride/stride-1_6238959.tar.lz4"
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

