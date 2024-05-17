## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dymd version: `v3.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_1527504.tar.lz4)** | Fri May 17 2024 16:29:30 UTC | `dymension_1100-1` | 3.9G | 1527504 | `dd2f36add246aecdd4a93024d6534978dcb4fd75541355a19f0d1ed13d2372a5` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_1512471.tar.lz4)** | Thu May 16 2024 16:51:51 UTC | `dymension_1100-1` | 4.6G | 1512471 | `1463172d1a4f654e7ea78e5427782af7b4c3110bf66acc0ebd07397d7d9b3b39` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_1527504.tar.lz4"
cd $HOME/.dymension
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_1527504.tar.lz4"
cd $HOME/.dymension
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start dymd`

