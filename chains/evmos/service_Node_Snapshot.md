## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
evmosd version: `v13.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15712414.tar.lz4)** | Wed Sep 06 2023 18:17:08 UTC | `evmos_9001-2` | 289G | 15712414 | `4adf9bd17be6d2baa2283913da0bd84d1be817e7a2e412c899f7c3374b294d3f` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15635110.tar.lz4)** | Sat Sep 02 2023 22:29:51 UTC | `evmos_9001-2` | 251G | 15635110 | `616cbaa66d9201a0a74bb02bbcb32223f9a3300596c201b3bb9233c6a593aef1` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15712414.tar.lz4"
cd $HOME/.evmosd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15712414.tar.lz4"
cd $HOME/.evmosd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/evmos/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start evmosd`

