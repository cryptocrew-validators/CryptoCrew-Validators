## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
empowerd version: `v2.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_6861912.tar.lz4)** | Sat Sep 14 2024 10:32:18 UTC | `empowerchain-1` | 589M | 6861912 | `32a5512474b8491526216ad64e0743860330c855f0dc23d456c4703de5c8dd10` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_6840940.tar.lz4)** | Fri Sep 13 2024 02:18:27 UTC | `empowerchain-1` | 530M | 6840940 | `1eb4e4f78c8d5b4ef55986877b2fae0e617af1ad9da35f238f95cd81289ed032` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_6861912.tar.lz4"
cd $HOME/.empowerchain
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_6861912.tar.lz4"
cd $HOME/.empowerchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_wasm.tar.lz4"
cd $HOME/.empowerchain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start empowerd`

