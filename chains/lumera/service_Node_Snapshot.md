## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumerad version: `v1.8.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2729757.tar.lz4)** | Fri Dec 12 2025 18:45:15 UTC | `lumera-mainnet-1` | 622M | 2729757 | `3705c8aec111584a34976abbde27aa535a4084207a8cd662a315d31ec73c2c8a` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2729547.tar.lz4)** | Fri Dec 12 2025 18:25:56 UTC | `lumera-mainnet-1` | 616M | 2729547 | `d9156c69a9895f775a29f57ae703f2a5e0b4d9eb78d99dbd96ce0e246b7fe152` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2729757.tar.lz4"
cd $HOME/.lumera
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2729757.tar.lz4"
cd $HOME/.lumera
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_wasm.tar.lz4"
cd $HOME/.lumera
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumerad`

