## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kava version: `v0.25.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_8166816.tar.lz4)** | Mon Jan 15 2024 07:24:55 UTC | `kava_2222-10` | 15G | 8166816 | `e6f00d4d77e1ad739da6e6b07e9343a3321eb2a71976f6c5e0f0cd0fb20bcb9a` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_8161972.tar.lz4)** | Sun Jan 14 2024 23:22:20 UTC | `kava_2222-10` | 15G | 8161972 | `4c39177a01e693439ff9fc748e94c4b5c0d6ecd42805f86f6e0957f52da226d0` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_8166816.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_8166816.tar.lz4"
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
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/kava/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kava`

