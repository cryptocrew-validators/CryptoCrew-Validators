## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from genesis, including tx_data.
oraid version: v0.50.8
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/oraichain/s3://ccv-s3/SNAPSHOTS/archive/oraichain/Oraichain_53982467.tar.lz4)** | Thu Mar 20 2025 19:39:00 UTC | Oraichain | 10.83GB | 53982467 | archive |

---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/oraichain/"
cd $HOME/.oraid
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - "$URL" | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
---

After downloading and extracting the snapshot, start the daemon:
`sudo systemctl start oraid`
