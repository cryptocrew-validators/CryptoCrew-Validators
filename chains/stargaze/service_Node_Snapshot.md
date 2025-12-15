## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v17.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27658529.tar.lz4)** | Mon Dec 15 2025 05:06:59 UTC | `stargaze-1` | 2.7G | 27658529 | `4decbcc8c7163ecc00559b900171ae7a8f4537457c7a3a96f0f8a1229bc3382d` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27622891.tar.lz4)** | Sun Dec 14 2025 05:10:36 UTC | `stargaze-1` | 2.7G | 27622891 | `95c51308df8560dfa5656684b37762acc7e173602cfbd4840f3ea97a74903984` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27587241.tar.lz4)** | Sat Dec 13 2025 05:10:53 UTC | `stargaze-1` | 2.7G | 27587241 | `d6f1e3f14ab78b28fc8b1006a3681a35724cd5681cc4247e6843d822dedca0c7` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27551622.tar.lz4)** | Fri Dec 12 2025 05:08:48 UTC | `stargaze-1` | 2.7G | 27551622 | `a7610cc5366dd73f9e1c96e63e5c234bef4f02883f497d3ba66dc74ab82afc89` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27516529.tar.lz4)** | Thu Dec 11 2025 05:13:17 UTC | `stargaze-1` | 2.7G | 27516529 | `165d883438c3cba6366ad81870c326a1ea45f37561853f6567a7f157cbe145fb` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27481054.tar.lz4)** | Wed Dec 10 2025 05:16:10 UTC | `stargaze-1` | 2.7G | 27481054 | `8a68689f3cb5a5f31f0d510f3a102852417d59aca9a4ee6c28edf1893c1e744e` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27658529.tar.lz4"
cd $HOME/.starsd
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27658529.tar.lz4"
cd $HOME/.starsd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_wasm.tar.lz4"
cd $HOME/.starsd
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start starsd`

