## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
loyald version: `v0.25.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5721693.tar.lz4)** | Mon Dec 25 2023 04:36:27 UTC | `loyal-main-02` | 25M | 5721693 | `a801614077383d2a3da96d79f518ef57dd8169679b9abaa216a81e20375a9fe9` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5706422.tar.lz4)** | Sun Dec 24 2023 04:40:29 UTC | `loyal-main-02` | 25M | 5706422 | `d4e89d81c519c4e5eb01bff55a72bd5e98538ccce25fc39348168218bd5d5edf` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5721693.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_5721693.tar.lz4"
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

