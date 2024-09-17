## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dydxprotocold version: `v5.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_25497885.tar.lz4)** | Tue Sep 17 2024 09:21:53 UTC | `dydx-mainnet-1` | 65G | 25497885 | `d0c2c639bb3da4fc83e746d298f4008db133c2a911929855484f21c6e9794d31` |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_25419541.tar.lz4)** | Mon Sep 16 2024 09:25:13 UTC | `dydx-mainnet-1` | 65G | 25419541 | `a9183c8aaeabc9f193093a5a45ee7062a9f7604bd028ea1fe235baa75750cbcb` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_25497885.tar.lz4"
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
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_25497885.tar.lz4"
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

