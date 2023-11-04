## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
migalood version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_3953770.tar.lz4)** | Sat Nov 04 2023 00:50:14 UTC | `migaloo-1` | 489M | 3953770 | `9117a7f3c350233d8125ef0c86cce4bd4e2755c2fe7d54ad2e64edbd6630af42` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_3923627.tar.lz4)** | Thu Nov 02 2023 00:58:28 UTC | `migaloo-1` | 479M | 3923627 | `6b41c2c2b2e2b4426ce1e982aebebbe9dd33bb4797e2cea0b7dc247d2d428fe8` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_3953770.tar.lz4"
cd $HOME/.migalood
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_3953770.tar.lz4"
cd $HOME/.migalood
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_wasm.tar.lz4"
cd $HOME/.migalood
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/migaloo/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start migalood`

