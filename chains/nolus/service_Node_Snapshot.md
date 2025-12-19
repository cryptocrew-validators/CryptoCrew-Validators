## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
nolusd version: `v0.8.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18778619.tar.lz4)** | Fri Dec 19 2025 01:54:04 UTC | `pirin-1` | 434M | 18778619 | `12e4684a3f231a99bb923ed6d1ee235f9ed8bb28d924952852a58bfed684fc83` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18750674.tar.lz4)** | Thu Dec 18 2025 01:54:30 UTC | `pirin-1` | 430M | 18750674 | `6c285f33972afaa25025b9b81d40a3da34e466197f0e6aa8a51467d7feecc21c` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18722598.tar.lz4)** | Wed Dec 17 2025 01:54:09 UTC | `pirin-1` | 440M | 18722598 | `521a09d1614ddd57296d7cbd2488c4a1c18b8877a09d83210e723650af0a7198` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18694786.tar.lz4)** | Tue Dec 16 2025 01:54:17 UTC | `pirin-1` | 447M | 18694786 | `3bfee675a12df39a9f9a25a7c833c74a6aa71021154896266ca02ae0ce44d1d6` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18666947.tar.lz4)** | Mon Dec 15 2025 01:54:04 UTC | `pirin-1` | 450M | 18666947 | `0a68404246147c315e91dc1822267e449eead9d3438fc3eaa001d0e3b196f58e` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18778619.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/nolus/pirin-1_18778619.tar.lz4"
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

