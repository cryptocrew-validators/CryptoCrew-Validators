## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
neutrond version: `v1.0.4`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_4293478.tar.lz4)** | Tue Nov 07 2023 13:14:16 UTC | `neutron-1` | 3.2G | 4293478 | `37177f5c93f2cedaa0dc48dbeb26df4f3bc3f6428eaa7bc3c5c47410d0d09d03` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_4244613.tar.lz4)** | Sun Nov 05 2023 12:39:05 UTC | `neutron-1` | 3.4G | 4244613 | `26748e5df838016ee5829bc594c629584a64c384aa0789d0f8ef58c360ff4b11` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_4293478.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_4293478.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/neutron/neutron-1_wasm.tar.lz4"
cd $HOME/.neutrond
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/neutron/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start neutrond`

