## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dymd version: `v3.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_2259560.tar.lz4)** | Thu Jul 04 2024 16:57:45 UTC | `dymension_1100-1` | 3.1G | 2259560 | `9e8ad63dd6c866d19d49a83ee4096d5bcc14dd64feacec5b99fa03e5e9ee08aa` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_2245046.tar.lz4)** | Wed Jul 03 2024 18:39:57 UTC | `dymension_1100-1` | 3.1G | 2245046 | `ed1ce1c215ac7e6cb993ba5fb4c5b41c5ef9f898749f71404867670b487435a7` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_2259560.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_2259560.tar.lz4"
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

