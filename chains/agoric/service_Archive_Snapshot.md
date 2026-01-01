## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
agd version: `v0.35.0-u22.1`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_23335284.tar.lz4)** | Thu Jan 01 2026 03:13:57 UTC | `agoric-3` | 5.7T | 23335284 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_23218546.tar.lz4)** | Thu Dec 25 2025 03:14:03 UTC | `agoric-3` | 5.7T | 23218546 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_23101868.tar.lz4)** | Thu Dec 18 2025 03:12:58 UTC | `agoric-3` | 5.7T | 23101868 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/agoric/agoric-3_23335284.tar.lz4"
cd $HOME/.agoric
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start agd`

