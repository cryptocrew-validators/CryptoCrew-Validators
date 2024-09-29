## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
akash version: `v0.36.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_18266990.tar.lz4)** | Sun Sep 29 2024 09:47:40 UTC | `akashnet-2` | 3.5G | 18266990 | `602ea4765f4d954fe22804310407544552468ed4150b8e15ec704732689c6c19` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_18252772.tar.lz4)** | Sat Sep 28 2024 09:48:17 UTC | `akashnet-2` | 3.5G | 18252772 | `666fc4b90bb6f4b76f8cb0dd47bd069eccb3b5c6779e0a4d03d74638702a8246` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_18266990.tar.lz4"
cd $HOME/.akash
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_18266990.tar.lz4"
cd $HOME/.akash
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start akash`

