## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
chihuahuad version: `v7`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_13237016.tar.lz4)** | Sun Jun 16 2024 16:49:27 UTC | `chihuahua-1` | 2.1G | 13237016 | `1f089c4c57a273610f8a04b5380df8be99ae5559e111479e864aa377fcfff429` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_13207967.tar.lz4)** | Fri Jun 14 2024 16:49:38 UTC | `chihuahua-1` | 2.1G | 13207967 | `3bc9a2f7413766fa0b3dd545a1bba4cae8f4f7b6172dc43730303c940260dcbc` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_13237016.tar.lz4"
cd $HOME/.chihuahuad
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_13237016.tar.lz4"
cd $HOME/.chihuahuad
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_wasm.tar.lz4"
cd $HOME/.chihuahuad/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start chihuahuad`

