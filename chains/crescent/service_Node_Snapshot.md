## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
crescentd version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8590155.tar.lz4)** | Tue Sep 19 2023 18:37:29 UTC | `crescent-1` | 742M | 8590155 | `bba1851ffcd7d436c21d16527c111506117c2da448b0e213d7da9ad072e1a0e8` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8574023.tar.lz4)** | Mon Sep 18 2023 18:39:12 UTC | `crescent-1` | 1.2G | 8574023 | `888b01a3cd6e625d70041bbd4d0190f007af231cefb7a5ea90fa7ac9a4d97a89` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8590155.tar.lz4"
cd $HOME/.crescent
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8590155.tar.lz4"
cd $HOME/.crescent
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/crescent/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start crescentd`

