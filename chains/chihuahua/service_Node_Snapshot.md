## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
chihuahuad version: `v6`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_10945420.tar.lz4)** | Thu Jan 11 2024 16:46:38 UTC | `chihuahua-1` | 1.3G | 10945420 | `5e38450a3f7c79a5e54632d837b21450a5b71343b20919bbc298af02bb4871dd` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_10930816.tar.lz4)** | Wed Jan 10 2024 16:52:25 UTC | `chihuahua-1` | 1.1G | 10930816 | `355d944091dd5854d6bc326414c1b3b4dfb0e26e5a7f4bc4198a69ccfa2e274c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_10945420.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/chihuahua/chihuahua-1_10945420.tar.lz4"
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

