## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
loyald version: `v0.25.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5385411.tar.lz4)** | Sun Dec 03 2023 04:37:58 UTC | `loyal-main-02` | 24M | 5385411 | `3490a589c5bdc43430506c444cfe4124fd596ed24910799d2044420811431e93` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5354945.tar.lz4)** | Fri Dec 01 2023 04:38:03 UTC | `loyal-main-02` | 29M | 5354945 | `b154bebb63f10b5ddecb80403cbfbda5a6c4ee5d7d8cc8c259ac08cbc9b2771e` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5385411.tar.lz4"
cd $HOME/.loyal
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5385411.tar.lz4"
cd $HOME/.loyal
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/loyal/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start loyald`

