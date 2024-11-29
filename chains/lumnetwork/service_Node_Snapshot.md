## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumd version: `v1.6.7`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_15934423.tar.lz4)** | Fri Nov 29 2024 05:40:27 UTC | `lum-network-1` | 1.8G | 15934423 | `9ec1315d66de95903cc15acd65c589d568598e198d7a672067bedf41a04dbcab` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_15904044.tar.lz4)** | Wed Nov 27 2024 05:40:24 UTC | `lum-network-1` | 1.6G | 15904044 | `633dc6dd4d3cfd61782226ac86d3169a321faa486aa9f08538f3fc151fb8c3eb` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_15934423.tar.lz4"
cd $HOME/.lumd
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_15934423.tar.lz4"
cd $HOME/.lumd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumd`

