## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
nolusd version: `v0.8.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18666947.tar.lz4)** | Mon Dec 15 2025 01:54:04 UTC | `pirin-1` | 450M | 18666947 | `0a68404246147c315e91dc1822267e449eead9d3438fc3eaa001d0e3b196f58e` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18639063.tar.lz4)** | Sun Dec 14 2025 01:54:22 UTC | `pirin-1` | 451M | 18639063 | `7220826d296ba144b06ceae89aab41d237e62468d2626a51e2b21affab352af3` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18611190.tar.lz4)** | Sat Dec 13 2025 01:54:08 UTC | `pirin-1` | 430M | 18611190 | `4f38d433900bfaf09bf841d8d4c50b63b4adf98717586b2d6af698830d75f8e7` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18583429.tar.lz4)** | Fri Dec 12 2025 01:54:25 UTC | `pirin-1` | 442M | 18583429 | `2b66a2102e96b64747e88032a28fbc6d0d38def34c8710b17190738a33695622` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18555554.tar.lz4)** | Thu Dec 11 2025 01:54:13 UTC | `pirin-1` | 470M | 18555554 | `8c09ec3cb6f50faee3926dd927602dac1388f5a6a7ea322aa5df39c0f0c645e4` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18527628.tar.lz4)** | Wed Dec 10 2025 01:55:05 UTC | `pirin-1` | 433M | 18527628 | `a1b7c03ee94d9a9b88f0fcdb07f8592c97639a6f3c89b1b5c390b3136840c471` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18666947.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18666947.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_wasm.tar.lz4"
cd $HOME/.nolus
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start nolusd`

