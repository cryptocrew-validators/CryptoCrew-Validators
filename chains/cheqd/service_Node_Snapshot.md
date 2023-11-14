## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
cheqd-noded version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10643810.tar.lz4)** | Tue Nov 14 2023 02:00:00 UTC | `cheqd-mainnet-1` | 85G | 10643810 | `71ec74516ec97d447ee108ed4ca665a07e031d77d46277cf1f869a916a85ff1c` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10629026.tar.lz4)** | Mon Nov 13 2023 02:45:55 UTC | `cheqd-mainnet-1` | 86G | 10629026 | `de2c73abcafa9c069b9344036dc54eeede37277055071c04b47616538e149048` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10643810.tar.lz4"
cd $HOME/.cheqdnode
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10643810.tar.lz4"
cd $HOME/.cheqdnode
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/cheqd/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start cheqd-noded`

