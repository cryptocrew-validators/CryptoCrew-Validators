## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
mantrachaind version: `v1.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1775820.tar.lz4)** | Sat Dec 21 2024 08:12:11 UTC | `mantra-1` | 3.7G | 1775820 | `1dc6a62f0305c0d80df4bb01c653d2204f3d0f0c509e2c6d4a1390b8f825bc33` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1750888.tar.lz4)** | Fri Dec 20 2024 08:12:39 UTC | `mantra-1` | 3.7G | 1750888 | `5fba645968cd7e31ac6be8ccd57433b2812a2267d9881c51992fde6063383013` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1775820.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_1775820.tar.lz4"
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

