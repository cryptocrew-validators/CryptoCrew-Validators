## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
osmosisd version: `v31.0.0-rc1-3-gcc93ee58d`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_69602941.tar.lz4)** | Wed Sep 02 2026 13:17:00 UTC | `osmosis-1` | 24T | 69602941 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_69135770.tar.lz4)** | Wed Aug 26 2026 13:14:52 UTC | `osmosis-1` | 24T | 69135770 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_68660858.tar.lz4)** | Wed Aug 19 2026 13:27:36 UTC | `osmosis-1` | 23T | 68660858 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/osmosis/osmosis-1_69602941.tar.lz4"
cd $HOME/.osmosisd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start osmosisd`

