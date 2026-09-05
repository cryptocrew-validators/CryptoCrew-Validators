## Node Snapshot
Solva provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
neutrond version: `v11.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_61430141.tar.lz4)** | Sat Sep 05 2026 15:22:51 UTC | `neutron-1` | 14G | 61430141 | `3ebf41a8f41d9326dc0fbd1339cd43f2b452f84b034fd60ae77a8747253d17a4` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_61417733.tar.lz4)** | Fri Sep 04 2026 15:25:15 UTC | `neutron-1` | 14G | 61417733 | `3280fe852c80a7a291808e92849eecff8590f38b234291396b9583b5b338c9b6` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_61430141.tar.lz4"
cd $HOME/.neutrond
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_61430141.tar.lz4"
cd $HOME/.neutrond
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_wasm.tar.lz4"
cd $HOME/.neutrond
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/neutron/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start neutrond`

