## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
quicksilverd version: `v1.2.17`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_4958383.tar.lz4)** | Fri Dec 08 2023 11:58:45 UTC | `quicksilver-2` | 991M | 4958383 | `fc844545bc12301b3e97c9570a306dc9860154802b1c49246d7adca79aae285b` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_4943376.tar.lz4)** | Thu Dec 07 2023 11:44:29 UTC | `quicksilver-2` | 878M | 4943376 | `67d1dae01a749a8421420ce1d772c42c640d80cbb698b7bf0d381f608237b954` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_4958383.tar.lz4"
cd $HOME/.quicksilverd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_4958383.tar.lz4"
cd $HOME/.quicksilverd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```


### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases. Note, on this chain the wasm folder is located within the `data` folder.
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/quicksilver-2_wasm.tar.lz4"
cd $HOME/.quicksilverd/data
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```


## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/quicksilver/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start quicksilverd`

