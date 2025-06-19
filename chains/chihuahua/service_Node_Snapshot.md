## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
chihuahuad version: `v9.0.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_18550676.tar.lz4)** | Thu Jun 19 2025 17:23:02 UTC | `chihuahua-1` | 241G | 18550676 | `8feb41b41af5bd5bfff5764eafa7f36cf32b8d18815c9a7abd1e7f07abe0bdf9` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_18520711.tar.lz4)** | Tue Jun 17 2025 17:22:39 UTC | `chihuahua-1` | 239G | 18520711 | `79223d77796a51cbdca4efa248db8c832d3366d38d8d12afd01f8369b5b56c1c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_18550676.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_18550676.tar.lz4"
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

