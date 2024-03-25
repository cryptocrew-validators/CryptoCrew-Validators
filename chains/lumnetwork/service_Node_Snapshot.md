## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumd version: `v1.6.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12179552.tar.lz4)** | Mon Mar 25 2024 05:37:25 UTC | `lum-network-1` | 554M | 12179552 | `a9ca371ac7d56444a76e7b80e2ab6e335fd59823614056bfcce0a7d883f132b8` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12149574.tar.lz4)** | Sat Mar 23 2024 05:40:55 UTC | `lum-network-1` | 555M | 12149574 | `b7e50282842971d18884269c6c2d90de10bbf42a2dd92d1492f5446d0ce9ff7b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12179552.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12179552.tar.lz4"
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

