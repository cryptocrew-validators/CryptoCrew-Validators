## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gaiad version: `v25.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28869559.tar.lz4)** | Mon Dec 15 2025 14:36:13 UTC | `cosmoshub-4` | 12G | 28869559 | `550dd2b2810bdfa622c13824c7d082353a4a42e2bd0e7ad214c8f38a52ad78a6` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28852010.tar.lz4)** | Sun Dec 14 2025 10:28:06 UTC | `cosmoshub-4` | 12G | 28852010 | `59e10b590cb189faed0a81f8491ae8a941ed053d971d02351f23ce473d6bcb5f` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28839630.tar.lz4)** | Sat Dec 13 2025 14:36:19 UTC | `cosmoshub-4` | 12G | 28839630 | `d0d047aeb9f1a71a9a55258ed84a2d43ee348be717636afcbb0ee9a7eab6ef68` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28822067.tar.lz4)** | Fri Dec 12 2025 10:31:11 UTC | `cosmoshub-4` | 12G | 28822067 | `e4a6aba69637ff3a3dbc273d832e0633035c13ab99727365ee2fe4910d336110` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28809705.tar.lz4)** | Thu Dec 11 2025 14:36:54 UTC | `cosmoshub-4` | 12G | 28809705 | `21c3ba9fc4121ed92162d57d8a134863e573f6280b9a243f7825668570c10564` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28791967.tar.lz4)** | Wed Dec 10 2025 10:12:55 UTC | `cosmoshub-4` | 12G | 28791967 | `61f8c1ee0e08315f62a4470bc26feeba99e691f5ec33b0638953ad30cff1dedf` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28869559.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_28869559.tar.lz4"
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

