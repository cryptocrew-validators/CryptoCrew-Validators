## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gaiad version: `v12.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_17208677.tar.lz4)** | Fri Sep 29 2023 11:02:49 UTC | `cosmoshub-4` | 5.3G | 17208677 | `ee6753de7271bddda75765e4ddbfe2a0f2ed809311e20469e8aaf2ca5b4c5dc3` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_17195136.tar.lz4)** | Thu Sep 28 2023 11:47:01 UTC | `cosmoshub-4` | 5.5G | 17195136 | `540474de0c866be95c0639a059368f2eb1f9abe84e9f77dc21cb0a7a1bd1ee78` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_17208677.tar.lz4"
cd $HOME/.gaia
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_17208677.tar.lz4"
cd $HOME/.gaia
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/cosmoshub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gaiad`

