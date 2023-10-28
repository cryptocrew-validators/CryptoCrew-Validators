## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gravity version: `vantares`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_9003374.tar.lz4)** | Sat Oct 28 2023 16:24:23 UTC | `gravity-bridge-3` | 830M | 9003374 | `c4562a7ecdaacbdea8ae9b36db8e892602c45ff5216d68b3feb4fff969b59f5d` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_8987784.tar.lz4)** | Fri Oct 27 2023 11:53:02 UTC | `gravity-bridge-3` | 856M | 8987784 | `837232bfb6a0f0bc7a424e63d37d89defed35d461a76a9a3476e6b19e5bb200a` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_9003374.tar.lz4"
cd $HOME/.gravity
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_9003374.tar.lz4"
cd $HOME/.gravity
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/gravitybridge/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gravity`

