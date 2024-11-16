## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
syntd version: `v0.19.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2255548.tar.lz4)** | Sat Nov 16 2024 15:15:10 UTC | `synternet-1` | 297M | 2255548 | `f225c6e10a13a602dddde1e3a6f5b135898071ec9a9bd4d80f185243cc803a1e` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2239629.tar.lz4)** | Fri Nov 15 2024 15:15:09 UTC | `synternet-1` | 299M | 2239629 | `8c4760678521ef31c9fa0980d0eb67d7ad7dbfd733d278710f211a18319a009d` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2255548.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_2255548.tar.lz4"
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

