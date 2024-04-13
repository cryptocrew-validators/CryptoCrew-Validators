## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
osmosisd version: `v23.0.8`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/archive/osmosis-1_14827661.tar.lz4)** | Sat Apr 13 2024 04:15:11 UTC | `osmosis-1` | 15T | 14827661 | `archive` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/archive/osmosis-1_14686891.tar.lz4)** | Sat Apr 06 2024 03:48:36 UTC | `osmosis-1` | 15T | 14686891 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/archive/osmosis-1_14827661.tar.lz4"
cd $HOME/.osmosisd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start osmosisd`

