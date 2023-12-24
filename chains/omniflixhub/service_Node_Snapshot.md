## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
omniflixhubd version: `v0.12.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_9974376.tar.lz4)** | Sun Dec 24 2023 05:03:27 UTC | `omniflixhub-1` | 3.0G | 9974376 | `324323adc910ae5243df376ea8806b406b40c683eeff213f4f39454ad12570a0` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_9959396.tar.lz4)** | Sat Dec 23 2023 04:56:57 UTC | `omniflixhub-1` | 2.9G | 9959396 | `0580dc387face3aa98dba033098d08f700c0d4ac1e32cd40f0dd445a78a6a83b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_9974376.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/omniflixhub/omniflixhub-1_9974376.tar.lz4"
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

