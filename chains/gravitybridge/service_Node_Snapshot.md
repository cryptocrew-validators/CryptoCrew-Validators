## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gravity version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13847976.tar.lz4)** | Tue Oct 08 2024 16:23:06 UTC | `gravity-bridge-3` | 1010M | 13847976 | `773d6e48a509d1702e2546fac1b7b68dde8a93affe91a933b69ba7c71bd953b6` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13830861.tar.lz4)** | Mon Oct 07 2024 12:09:19 UTC | `gravity-bridge-3` | 1.1G | 13830861 | `331ca9afdc77fe8682d14906687694e053201535f6a6fd5d03bdaee629916d6f` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13847976.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/gravity-bridge-3_13847976.tar.lz4"
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
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/gravitybridge/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gravity`

