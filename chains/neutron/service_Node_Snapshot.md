## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
neutrond version: `v2.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_7782444.tar.lz4)** | Mon Mar 04 2024 12:39:14 UTC | `neutron-1` | 3.1G | 7782444 | `0436a2349e8dfda6d04b2d81f91785e41dacf50d8e5de564a3897611b79d59b2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_7748779.tar.lz4)** | Sun Mar 03 2024 12:28:46 UTC | `neutron-1` | 3.1G | 7748779 | `16587f2f856dab6fc8b9b18b5edb0434051e2b516e684ec2f5bd24c4233dfde5` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_7782444.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_7782444.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_wasm.tar.lz4"
cd $HOME/.neutrond
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/neutron/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start neutrond`

