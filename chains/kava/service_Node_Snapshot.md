## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kava version: `v0.26.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_10232919.tar.lz4)** | Tue Jun 11 2024 07:11:23 UTC | `kava_2222-10` | 17G | 10232919 | `358ead5cec52a5026c8776dfd3a4e2af602c73f8cd6ea4f8c813a23d58cc11ed` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_10227455.tar.lz4)** | Mon Jun 10 2024 23:14:55 UTC | `kava_2222-10` | 17G | 10227455 | `0439de1146d57f1c18a1ed634323832e4a0a7b9858c420fbd9a14679e81530f6` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_10232919.tar.lz4"
cd $HOME/.kava
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_10232919.tar.lz4"
cd $HOME/.kava
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kava`

