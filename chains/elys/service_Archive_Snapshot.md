## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from genesis, including tx_data.
elysd version: v2.1.0
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/elys/elys-1_1882651.tar.lz4)** | Tue Mar 04 2025 13:32:57 UTC | elys-1 | 304.41GB | 1882651 | archive |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/elys/elys-1_920623.tar.lz4)** | Tue Jan 21 2025 14:07:20 UTC | elys-1 | 130.23GB | 920623 | archive |

---

## Download instructions
Download & extract snapshot:
```sh
sudo apt install wget lz4
URL="https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/elys/"
cd $HOME/.elys
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
---

After downloading and extracting the snapshot, start the daemon:
`sudo systemctl start elysd`
