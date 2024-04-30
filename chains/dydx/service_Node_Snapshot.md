## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
dydxprotocold version: `v4.1.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_14467738.tar.lz4)** | Tue Apr 30 2024 09:10:30 UTC | `dydx-mainnet-1` | 3.0G | 14467738 | `5e90196889d12233f9c45526e67b15592ff8ce81c6d092f81a1a3fa90e23a14d` |
| **[DOWNLOAD](https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_14390439.tar.lz4)** | Mon Apr 29 2024 09:10:30 UTC | `dydx-mainnet-1` | 3.0G | 14390439 | `f6aa75f01b61bbe6b58a6fe20ae700e4d17ff8be51800c49f8d742a5e89d259c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_14467738.tar.lz4"
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
URL="https://dl-tyo.ccvalidators.com/SNAPSHOTS/dydx/dydx-mainnet-1_14467738.tar.lz4"
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

