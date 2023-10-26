## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
emd version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2578121.tar.lz4)** | Thu Oct 26 2023 11:18:13 UTC | `emoney-3` | 344M | 2578121 | `bae139de210d59b3a36ba8c380c7ad1556c33a4ec8a07258bb4019a2473ccfd9` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2575483.tar.lz4)** | Wed Oct 25 2023 13:18:08 UTC | `emoney-3` | 439M | 2575483 | `37f5e6f412d5569a69217349e1502090db4683a38ff3152795366fc4b3591809` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2578121.tar.lz4"
cd $HOME/.emd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/emoney/emoney-3_2578121.tar.lz4"
cd $HOME/.emd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/emoney/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start emd`

