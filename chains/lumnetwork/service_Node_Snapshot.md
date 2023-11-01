## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumd version: `v1.6.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_9991330.tar.lz4)** | Tue Oct 31 2023 05:37:18 UTC | `lum-network-1` | 571M | 9991330 | `f2edffdacb760b4818a76966e933cc790318f220383ca6430a94a3ac93169488` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_10006270.tar.lz4)** | Wed Nov 01 2023 05:41:59 UTC | `lum-network-1` | 1.6G | 10006270 | `6d8dce5ab01d9731b70c716c88763f3859742b0ec887a189e4b7f09eb046c758` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_10006270.tar.lz4"
cd $HOME/.lumd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_10006270.tar.lz4"
cd $HOME/.lumd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumd`

