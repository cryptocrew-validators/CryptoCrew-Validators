## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
syntd version: `v0.19.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2966549.tar.lz4)** | Tue Dec 31 2024 15:15:13 UTC | `synternet-1` | 488M | 2966549 | `d907f5f8f25ce66b377205cc670f71a9d25e8ff29ad59eda7d425a284cd6b1ac` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2950851.tar.lz4)** | Mon Dec 30 2024 15:15:16 UTC | `synternet-1` | 483M | 2950851 | `0a98a50853bb74515f42240a7adba0967b67cf483d4d066c8ccc782d33fd672a` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2966549.tar.lz4"
cd $HOME/.amber
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2966549.tar.lz4"
cd $HOME/.amber
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start syntd`

