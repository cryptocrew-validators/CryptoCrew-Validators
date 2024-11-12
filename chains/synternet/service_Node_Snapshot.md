## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
syntd version: `v0.19.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2192309.tar.lz4)** | Tue Nov 12 2024 15:15:11 UTC | `synternet-1` | 289M | 2192309 | `34d2c9906cc305ca1b2b0ab3b98d87ab3f18c6436e18533a2d2bef9dfd1b8ef0` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2176586.tar.lz4)** | Mon Nov 11 2024 15:15:09 UTC | `synternet-1` | 283M | 2176586 | `e5542ffebe363638394a9434d5c592caf808f6cb5447e8543b6514f53758bf20` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2192309.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2192309.tar.lz4"
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

