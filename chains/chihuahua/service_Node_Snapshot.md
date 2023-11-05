## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
chihuahuad version: `v5.0.4`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_9967197.tar.lz4)** | Sun Nov 05 2023 16:52:03 UTC | `chihuahua-1` | 1.3G | 9967197 | `842c5e5695eee6546783ac8cfa6273b9414ff7e53eccdc6de38016be357ae3dc` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_9952727.tar.lz4)** | Sat Nov 04 2023 16:53:30 UTC | `chihuahua-1` | 1.1G | 9952727 | `af57a8e93e0fcd869f657b78c5f4536507cdad6ac85b48ef7b33405954d33e80` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_9967197.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_9967197.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_wasm.tar.lz4"
cd $HOME/.chihuahuad/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start chihuahuad`

