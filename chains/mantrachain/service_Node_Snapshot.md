## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
mantrachaind version: `v1.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1850573.tar.lz4)** | Tue Dec 24 2024 08:12:18 UTC | `mantra-1` | 3.9G | 1850573 | `c4e9ab1764ab964a4cfd0e950dd0dba30430eb055f3810f8c16301c57d17d579` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1825662.tar.lz4)** | Mon Dec 23 2024 08:12:21 UTC | `mantra-1` | 3.8G | 1825662 | `ddd57c41ec635d90a832272765a571e1da93bdc9b5374cd7b19c30c63ded34ac` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1850573.tar.lz4"
cd $HOME/.mantrachain
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1850573.tar.lz4"
cd $HOME/.mantrachain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_wasm.tar.lz4"
cd $HOME/.mantrachain
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start mantrachaind`

