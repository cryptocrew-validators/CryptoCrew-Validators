## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
cheqd-noded version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10584861.tar.lz4)** | Fri Nov 10 2023 01:59:52 UTC | `cheqd-mainnet-1` | 83G | 10584861 | `9f97dbfe3bbb48070f6d10fbcec5967d35eb470011e106d99ea4cc7ba6514717` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10570152.tar.lz4)** | Thu Nov 09 2023 02:46:45 UTC | `cheqd-mainnet-1` | 84G | 10570152 | `ea913cf07d914b4c6263afa577007fb31dfc7680822fefb979ac0fb307962217` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10584861.tar.lz4"
cd $HOME/.cheqdnode
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/cheqd/cheqd-mainnet-1_10584861.tar.lz4"
cd $HOME/.cheqdnode
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/cheqd/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start cheqd-noded`

