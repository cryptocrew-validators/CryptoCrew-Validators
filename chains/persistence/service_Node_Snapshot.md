## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
persistenceCore version: `v16.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25122387.tar.lz4)** | Sat Dec 13 2025 12:25:47 UTC | `core-1` | 321M | 25122387 | `d02fe16ef7e311d6e5744dd40add3ba0c4664b1b10d24dd954d0927b8b2e883a` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25107306.tar.lz4)** | Fri Dec 12 2025 12:11:58 UTC | `core-1` | 307M | 25107306 | `a57975dfe5073b8fa2de612eb1ff587a63195c2504d2c519562fa249ac154b72` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25092474.tar.lz4)** | Thu Dec 11 2025 12:25:42 UTC | `core-1` | 332M | 25092474 | `5896d8e895de3d71ac28262cac9b9e0bd175dfc1c5dc4f84a77070d19e2905aa` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25077360.tar.lz4)** | Wed Dec 10 2025 12:12:29 UTC | `core-1` | 316M | 25077360 | `20cfc57279d71d9485922b052f7f494b622d315c63e7842a73c10184a19f2413` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25062537.tar.lz4)** | Tue Dec 09 2025 12:25:47 UTC | `core-1` | 342M | 25062537 | `413b98c07de386a815686a283bf4bd8d461b5aa8f783d386400d6da17272cff3` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25122387.tar.lz4"
cd $HOME/.persistenceCore
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_25122387.tar.lz4"
cd $HOME/.persistenceCore
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/core-1_wasm.tar.lz4"
cd $HOME/.persistenceCore
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/persistence/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start persistenceCore`

