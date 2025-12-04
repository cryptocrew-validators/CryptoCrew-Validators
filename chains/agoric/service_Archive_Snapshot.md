## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
agd version: `v0.35.0-u22.1`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_22869302.tar.lz4)** | Thu Dec 04 2025 03:10:16 UTC | `agoric-3` | 5.7T | 22869302 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_22753457.tar.lz4)** | Thu Nov 27 2025 03:10:25 UTC | `agoric-3` | 5.7T | 22753457 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_22637794.tar.lz4)** | Thu Nov 20 2025 03:08:29 UTC | `agoric-3` | 5.7T | 22637794 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_22869302.tar.lz4"
cd $HOME/.agoric
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start agd`

