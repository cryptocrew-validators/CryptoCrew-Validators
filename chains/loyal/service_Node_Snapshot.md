## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
loyald version: `v0.25.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_10740144.tar.lz4)** | Tue Nov 19 2024 04:50:26 UTC | `loyal-main-02` | 30M | 10740144 | `37b83324f645763adb15a3f547d5ef65e588f85794a930db9126327725833970` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_10709937.tar.lz4)** | Sun Nov 17 2024 04:46:59 UTC | `loyal-main-02` | 34M | 10709937 | `c4ac0a96f0e71d65636c0b3c7e641a8a9120fe302e0a1cdf5719460e62d1c13f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_10740144.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_10740144.tar.lz4"
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
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/loyal/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start loyald`

