## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
crescentd version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8671084.tar.lz4)** | Sun Sep 24 2023 18:39:16 UTC | `crescent-1` | 1.1G | 8671084 | `76d67980225a7540da94d7d251d05e29dad1e011bf35c105324a833df65c5a44` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8654873.tar.lz4)** | Sat Sep 23 2023 18:37:26 UTC | `crescent-1` | 989M | 8654873 | `1ab6f5b69ca9408158b67b9a16cea37f1590c32a9e94d4e2bda1e5152aead84a` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8671084.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/crescent/crescent-1_8671084.tar.lz4"
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

