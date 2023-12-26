## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
omniflixhubd version: `v0.12.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_9989307.tar.lz4)** | Mon Dec 25 2023 04:56:55 UTC | `omniflixhub-1` | 3.0G | 9989307 | `e1384a6954efcdee841c56faa04cb56ef84b626dbeda468280d540c5bba890bd` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10004297.tar.lz4)** | Tue Dec 26 2023 05:04:02 UTC | `omniflixhub-1` | 3.0G | 10004297 | `f5cd54dfe88fb012e8fe5d4bb0e9f0286518257757ef91a9c6e944bf43e1411c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10004297.tar.lz4"
cd $HOME/.omniflixhub
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_10004297.tar.lz4"
cd $HOME/.omniflixhub
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start omniflixhubd`

