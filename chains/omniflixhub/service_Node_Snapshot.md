## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
omniflixhubd version: `v3.3.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_11811294.tar.lz4)** | Thu Apr 25 2024 16:02:52 UTC | `omniflixhub-1` | 3.9G | 11811294 | `8bbfd2190f485802a63cda22201ca7b7f8adf364835d7314dd118ec4bbfdbce2` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_11789652.tar.lz4)** | Wed Apr 24 2024 05:00:03 UTC | `omniflixhub-1` | 3.9G | 11789652 | `dc524b690a09c20fbbd15fc1e5fffdf83dc6ef9691b574cdda034e1f7d6411b5` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_11811294.tar.lz4"
cd $HOME/.omniflixhub
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_11811294.tar.lz4"
cd $HOME/.omniflixhub
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_wasm.tar.lz4"
cd $HOME/.omniflixhub
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/omniflixhub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start omniflixhubd`

