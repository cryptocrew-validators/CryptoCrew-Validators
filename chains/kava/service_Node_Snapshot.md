## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kava version: `v0.24.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6930704.tar.lz4)** | Tue Oct 17 2023 07:11:49 UTC | `kava_2222-10` | 15G | 6930704 | `cd0e3171b78df13c245f43009742358a9912a360d8a379f3a4bb81e57754a4ee` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6925725.tar.lz4)** | Mon Oct 16 2023 22:52:22 UTC | `kava_2222-10` | 12G | 6925725 | `1872c9054be01b0f8c9b7057237605a0c0603d4412f6d95eac2c3189d083e9b5` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6930704.tar.lz4"
cd $HOME/.kava
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6930704.tar.lz4"
cd $HOME/.kava
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/kava/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kava`

