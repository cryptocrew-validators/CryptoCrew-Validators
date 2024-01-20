## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
loyald version: `v0.25.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_6119238.tar.lz4)** | Sat Jan 20 2024 04:38:07 UTC | `loyal-main-02` | 27M | 6119238 | `cfb7dd8a2019d3ba7a3cf1df741ed2336df42a796c3b2bdb9867a66c0d1c3ff6` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_6103912.tar.lz4)** | Fri Jan 19 2024 04:39:01 UTC | `loyal-main-02` | 28M | 6103912 | `6338fdef333486297a0ed0395bb0cf80b172e3b10168d110c07fe95759f72ec8` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_6119238.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_6119238.tar.lz4"
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

