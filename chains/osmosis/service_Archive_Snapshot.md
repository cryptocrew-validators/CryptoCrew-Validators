## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
osmosisd version: `v24.0.1`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_15229897.tar.lz4)** | Sat Apr 20 2024 23:12:06 UTC | `osmosis-1` | 15T | 15229897 | `archive` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_15019689.tar.lz4)** | Sat Apr 20 2024 23:12:06 UTC | `osmosis-1` | 15T | 15019689 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/archive/osmosis-1_15229897.tar.lz4"
cd $HOME/.osmosisd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start osmosisd`

