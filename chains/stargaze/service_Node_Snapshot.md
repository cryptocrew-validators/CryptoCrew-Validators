## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
starsd version: `v17.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27873290.tar.lz4)** | Sun Dec 21 2025 05:12:29 UTC | `stargaze-1` | 2.7G | 27873290 | `0e4ef7168843840c74614cd6587b80db01ee4c287f22ef2800a49c4a3c5ae3f0` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27837365.tar.lz4)** | Sat Dec 20 2025 05:09:35 UTC | `stargaze-1` | 2.7G | 27837365 | `4f49d23bdd8810a0447320dc377182f088712c1ced850ad5c85b84c23e97ce25` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27801427.tar.lz4)** | Fri Dec 19 2025 05:06:42 UTC | `stargaze-1` | 2.7G | 27801427 | `d0e380127f7a761272ca2dde42de79052e23216cb89444f8910e8d7cc2db04bb` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27765800.tar.lz4)** | Thu Dec 18 2025 05:11:43 UTC | `stargaze-1` | 2.7G | 27765800 | `f43f80cbe238ffd06418317f9c085d1412278c4c382e6c41c05223a824d5371a` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27730063.tar.lz4)** | Wed Dec 17 2025 05:09:05 UTC | `stargaze-1` | 2.7G | 27730063 | `a080cd5fb09fda3aa71cdc45e705d2657745de52a0a0ec9bbe3a66ca73cbcc1f` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27694618.tar.lz4)** | Tue Dec 16 2025 05:22:04 UTC | `stargaze-1` | 2.7G | 27694618 | `3b5f3f1a81ca4356a4f5364448206eb100167c22b14cb3d2667844cdcf90dcf6` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27658529.tar.lz4)** | Mon Dec 15 2025 05:06:59 UTC | `stargaze-1` | 2.7G | 27658529 | `4decbcc8c7163ecc00559b900171ae7a8f4537457c7a3a96f0f8a1229bc3382d` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27873290.tar.lz4"
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/stargaze/stargaze-1_27873290.tar.lz4"
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

