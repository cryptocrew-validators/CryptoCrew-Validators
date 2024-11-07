## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
mantrachaind version: `v1.0.0-rc3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_685176.tar.lz4)** | Thu Nov 07 2024 08:11:50 UTC | `mantra-1` | 1.4G | 685176 | `6eb3a7cb17e3e5e766117c7f9322311150d80929976bdad8cbe682c65a98030d` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_660682.tar.lz4)** | Wed Nov 06 2024 08:11:55 UTC | `mantra-1` | 1.4G | 660682 | `81b3ffba986d4cac800d3ca7541226adf3f0d21207e0a4a99119e7476a51fe5e` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_685176.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/mantrachain/mantra-1_685176.tar.lz4"
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

