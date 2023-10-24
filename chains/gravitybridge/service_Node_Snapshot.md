## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gravity version: `vantares`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_8950346.tar.lz4)** | Tue Oct 24 2023 16:15:04 UTC | `gravity-bridge-3` | 884M | 8950346 | `cd229e1f5279f305872bae1bd44ff6d776a45d11e1f875ed26f0f98689836baa` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_8934604.tar.lz4)** | Mon Oct 23 2023 11:54:40 UTC | `gravity-bridge-3` | 976M | 8934604 | `c1d15da6e658d73f0d7e8b4fa2dbcbe049ada4fc80d4ea57091425341e1219b2` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_8950346.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_8950346.tar.lz4"
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
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gravity`

