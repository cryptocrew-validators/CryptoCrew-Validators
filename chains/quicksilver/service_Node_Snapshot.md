## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
quicksilverd version: `v1.2.17`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_5165700.tar.lz4)** | Fri Dec 22 2023 11:45:04 UTC | `quicksilver-2` | 809M | 5165700 | `f15a35f0e0329ba9180e23d02c477e6100355a2212bc9ddd6500b6d549520e53` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_5150903.tar.lz4)** | Thu Dec 21 2023 11:47:08 UTC | `quicksilver-2` | 908M | 5150903 | `628738a96a3efad213a7ea69efce3ed3de2bdddaf31343e704c47222a2cfa445` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_5165700.tar.lz4"
cd $HOME/.quicksilverd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_5165700.tar.lz4"
cd $HOME/.quicksilverd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_wasm.tar.lz4"
cd $HOME/.quicksilverd/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start quicksilverd`

