## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dymd version: `v3.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_3795337.tar.lz4)** | Fri Oct 11 2024 16:29:56 UTC | `dymension_1100-1` | 3.6G | 3795337 | `aaff286ac360a9ce46db9e37c94fec2a8240760d9e7edf8dc9d4e56b86b82cce` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_3781116.tar.lz4)** | Thu Oct 10 2024 18:37:17 UTC | `dymension_1100-1` | 3.3G | 3781116 | `8a2f5d8773f61c02ef965b2ab05efdca4f0dab9a73a4baab343e6859afdbbd60` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_3795337.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/dymension/dymension_1100-1_3795337.tar.lz4"
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

