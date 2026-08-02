## Full Archive Snapshot
Solva provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
neutrond version: `v11.1.0`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/neutron/neutron-1_60976624.tar.lz4)** | Sun Aug 02 2026 00:22:29 UTC | `neutron-1` | 18T | 60976624 | `archive` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/neutron/neutron-1_60895208.tar.lz4)** | Sun Jul 26 2026 00:13:50 UTC | `neutron-1` | 18T | 60895208 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/archive/neutron/neutron-1_60976624.tar.lz4"
cd $HOME/.neutrond
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start neutrond`

