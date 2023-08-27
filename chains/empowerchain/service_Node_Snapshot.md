## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
empowerd version: `v1.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/empowerchain-1_923774.tar.lz4)** | Sun Aug 27 2023 02:18:15 UTC | `empowerchain-1` | 421M | 923774 | `0353ecebe89379b6766f299ee87470b1e54f9c3b3aab9db1650c8214c0d9462a` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/empowerchain-1_913578.tar.lz4)** | Sat Aug 26 2023 10:32:17 UTC | `empowerchain-1` | 382M | 913578 | `08683f52503089a9f378e85e6215e7f05b26edbc663975b1ac91bd5ead315d7e` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_923774.tar.lz4"
cd $HOME/.empowerchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
diff -s <(sha256sum $(basename $URL) | awk '{print $1}') <(cat $(basename $URL).sha256)
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_923774.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_wasm.tar.lz4"
cd $HOME/.empowerchain
rm -rf wasm
wget -O - \$URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start empowerd`

