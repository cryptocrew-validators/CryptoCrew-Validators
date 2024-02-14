## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gravity version: `v1.11.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_10496267.tar.lz4)** | Wed Feb 14 2024 16:30:57 UTC | `gravity-bridge-3` | 851M | 10496267 | `421824ebec84f30d413b1ba1ee003ba6d03cc3c53a103c0832feba17e32e8ffb` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_10479754.tar.lz4)** | Tue Feb 13 2024 11:54:22 UTC | `gravity-bridge-3` | 948M | 10479754 | `1b5eb57b24c8f608dc07e8eef684ea720748f8e2b206077149a4985890876dc7` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_10496267.tar.lz4"
cd $HOME/.gravity
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_10496267.tar.lz4"
cd $HOME/.gravity
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gravity`

