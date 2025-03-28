## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
syntd version: `v0.21.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_4328302.tar.lz4)** | Fri Mar 28 2025 15:15:18 UTC | `synternet-1` | 802M | 4328302 | `0fec9a2d2b564476832ea018a5d970f50e72942a2f84069c33b835350a36976a` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_4297270.tar.lz4)** | Wed Mar 26 2025 15:15:20 UTC | `synternet-1` | 793M | 4297270 | `5230548403b69073030243b9cf7fce37a8987409f18cc4b92be71b5904e995c2` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_4328302.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/synternet/synternet-1_4328302.tar.lz4"
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

