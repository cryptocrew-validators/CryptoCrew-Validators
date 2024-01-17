## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumd version: `v1.6.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_11158743.tar.lz4)** | Wed Jan 17 2024 05:37:17 UTC | `lum-network-1` | 374M | 11158743 | `68e61d0c8a10f8d734fec02f6e2cff43d31482025ed059134ec298a2496223d7` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_11129014.tar.lz4)** | Mon Jan 15 2024 05:48:22 UTC | `lum-network-1` | 427M | 11129014 | `067c6ad421b5aeaaada0795f26935661422989254b5e3803f27374af8adf854d` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_11158743.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/lumnetwork/lum-network-1_11158743.tar.lz4"
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

