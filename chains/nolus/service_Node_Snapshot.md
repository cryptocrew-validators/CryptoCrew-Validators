## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
nolusd version: `v0.4.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_2649749.tar.lz4)** | Fri Nov 17 2023 00:50:52 UTC | `pirin-1` | 742M | 2649749 | `c4808f33bcdfce50f2a43461278d028e2efec11586a01c02561f6f6891c16249` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_2635425.tar.lz4)** | Thu Nov 16 2023 01:53:10 UTC | `pirin-1` | 454M | 2635425 | `171f99555566105c56e1b4fd87ad61d1dc8163bc9d2238a6679af06bc46b0650` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_2649749.tar.lz4"
cd $HOME/.nolus
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_2649749.tar.lz4"
cd $HOME/.nolus
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_wasm.tar.lz4"
cd $HOME/.nolus
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/nolus/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start nolusd`

