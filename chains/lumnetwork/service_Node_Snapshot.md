## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumd version: `v1.6.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12646374.tar.lz4)** | Thu Apr 25 2024 06:30:54 UTC | `lum-network-1` | 628M | 12646374 | `91ec2dff5e2877e086b187924f456462494a43dd214ac75a4592bfd87bcf5e49` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12616099.tar.lz4)** | Tue Apr 23 2024 06:07:45 UTC | `lum-network-1` | 570M | 12616099 | `3591d989fad0cd8c598e60fe4c5f6a4cf774a3fa0393359dfa2c65f1fa21628b` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12646374.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_12646374.tar.lz4"
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
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/lumnetwork/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumd`

