## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from the genesis block on, tx_data is included.  
zigchaind version: `v3.0.0`
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/zigchaintestnet/zig-test-2_4900991.tar.lz4)** | Thu Mar 12 2026 22:43:44 UTC | `zig-test-2` | 1.5T | 4900991 | `archive` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/zigchaintestnet/zig-test-2_4793174.tar.lz4)** | Thu Mar 05 2026 22:40:55 UTC | `zig-test-2` | 1.4T | 4793174 | `archive` |
---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/archive/zigchaintestnet/zig-test-2_4900991.tar.lz4"
cd $HOME/.zigchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start zigchaind`

