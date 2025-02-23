## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
akash version: `v0.36.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20361404.tar.lz4)** | Sun Feb 23 2025 09:48:53 UTC | `akashnet-2` | 12G | 20361404 | `629ccbd3632a6f51f959e33187e1b7bfbf5446b46922f80e1db1552eb6b9798e` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20347124.tar.lz4)** | Sat Feb 22 2025 09:52:29 UTC | `akashnet-2` | 8.2G | 20347124 | `2b52681e7587dfe5812fbb81553f002fef1c64ace4aa0a85ef3b80e019ab7a19` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20361404.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/akash/akashnet-2_20361404.tar.lz4"
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

