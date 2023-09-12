## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
evmosd version: `v13.0.2`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15836921.tar.lz4)** | Tue Sep 12 2023 20:34:31 UTC | `evmos_9001-2` | 248G | 15836921 | `f037161e94418302eeedc6bd1f71cab18127495131b1ee6b48be77dcde06b2d5` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15754465.tar.lz4)** | Fri Sep 08 2023 21:21:47 UTC | `evmos_9001-2` | 296G | 15754465 | `8e4aaefd53051a6adaa7173ee4e7c36f1b0b066dda509527b69fc2cee49b1ad3` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15836921.tar.lz4"
cd $HOME/.evmosd
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/evmos/evmos_9001-2_15836921.tar.lz4"
cd $HOME/.evmosd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/evmos/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start evmosd`

