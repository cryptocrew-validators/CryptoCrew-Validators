## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!
nilchaind version: v0.2.5
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/nillion/nillion-1_2181623.tar.lz4)** | Sat Jul 05 2025 09:26:00 UTC | nillion-1 | 148.00MB | 2181623 |  |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/nillion/nillion-1_996998.tar.lz4)** | Fri Apr 18 2025 14:34:00 UTC | nillion-1 | 164.09MB | 996998 |  |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/nillion/nillion-1_2181623.tar.lz4"
cd $HOME/.nillionapp
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
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/nillion/nillion-1_2181623.tar.lz4"
cd $HOME/.nillionapp
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
## Using the download script
The download script fully automates the process and preserves validator state. Run:
```sh
curl -sSL https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/nillion/download_snapshot.sh | bash
```
---

After extracting, start the daemon:
`sudo systemctl start nilchaind`
