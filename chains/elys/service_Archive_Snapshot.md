## Full Archive Snapshot
CryptoCrew provides full Archive Snapshots for selected chains. These snapshots include the full block history from genesis, including tx_data.
elysd version: null
| DOWNLOAD | date | chain id | size | height | snapshot type |
| -------- | ---- | -------- | ---- | ------ | ------------- |
| **[DOWNLOAD](https://ccv-s3.nbg1.your-objectstorage.com/SNAPSHOTS/archive/elys/_.tar.lz4)** | Mon Jan 20 2025 09:29:02 UTC |  | 2831B |  | archive |

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
