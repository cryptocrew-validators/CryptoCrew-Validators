## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gaiad version: `v26.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29972375.tar.lz4)** | Fri Feb 27 2026 14:37:06 UTC | `cosmoshub-4` | 12G | 29972375 | `7ac021342dc9c46f7364eba203fee20992fda4595d53f74e82693fc35859d8c4` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29955100.tar.lz4)** | Thu Feb 26 2026 10:53:06 UTC | `cosmoshub-4` | 12G | 29955100 | `c327a796f03d4f7109c80e9f3fcf26ec7ead82474722672c9d2e047b7e537005` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29942576.tar.lz4)** | Wed Feb 25 2026 14:37:07 UTC | `cosmoshub-4` | 12G | 29942576 | `36c5877b2e51d0b6033b07c4ba9becfd15a18bc318b0e909ee06130dceecd42a` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29925495.tar.lz4)** | Tue Feb 24 2026 11:12:41 UTC | `cosmoshub-4` | 12G | 29925495 | `49787b5291c035c50d2a4d3ed7f6e65ffc60232ab31384ddc50904355b53881e` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29912755.tar.lz4)** | Mon Feb 23 2026 14:37:57 UTC | `cosmoshub-4` | 12G | 29912755 | `177a573ed238ab36b02d1d7792a6bf6ecf9ca5c6992e1ed05e89ef19845d6b05` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29895436.tar.lz4)** | Sun Feb 22 2026 10:46:23 UTC | `cosmoshub-4` | 12G | 29895436 | `335c07a2be512b3060069c2544d2db9d30a54c0c675ffa84ee0c2977b21fa734` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29972375.tar.lz4"
cd $HOME/.gaia
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_29972375.tar.lz4"
cd $HOME/.gaia
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_wasm.tar.lz4"
cd $HOME/.gaia
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gaiad`

