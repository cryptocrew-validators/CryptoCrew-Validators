## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dydxprotocold version: `v2.0.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_5155723.tar.lz4)** | Fri Jan 05 2024 09:11:02 UTC | `dydx-mainnet-1` | 2.3G | 5155723 | `7121ff453d3886c8c9b5c3eaad9c7353ce9151c6b775bb15d7c45ddb83440dd2` |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_5072381.tar.lz4)** | Thu Jan 04 2024 09:10:55 UTC | `dydx-mainnet-1` | 2.3G | 5072381 | `c259ebaa7f37f080fc0bc16c609efefc5c173d89cff2d1bef20160c6af1df841` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_5155723.tar.lz4"
cd $HOME/.dydxprotocol
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
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_5155723.tar.lz4"
cd $HOME/.dydxprotocol
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start dydxprotocold`

