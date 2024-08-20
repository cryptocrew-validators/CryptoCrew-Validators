## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gravity version: `v1.11.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13140053.tar.lz4)** | Tue Aug 20 2024 17:51:26 UTC | `gravity-bridge-3` | 665M | 13140053 | `846f03aae84b527c6b517c5f16464e5931cd9ccfb38463f61859524ba4b707c5` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13122120.tar.lz4)** | Mon Aug 19 2024 11:50:19 UTC | `gravity-bridge-3` | 737M | 13122120 | `58e9f0023194ff00fa87d84fa2bb4c68907a15cf67a16591545c6ecc1d280487` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13140053.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13140053.tar.lz4"
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

