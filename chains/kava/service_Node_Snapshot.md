## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kava version: `v0.26.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_9766102.tar.lz4)** | Thu May 09 2024 07:17:34 UTC | `kava_2222-10` | 17G | 9766102 | `1a4b75a6c85f1ee4b34f858ad2a26f11487423e5318d2160de3d0270975d1e9e` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_9761126.tar.lz4)** | Wed May 08 2024 23:13:37 UTC | `kava_2222-10` | 17G | 9761126 | `f8a9c1aa344c0ed78ae01397affd19eebefa2da8fb9fead6473763e6bd8afed7` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_9766102.tar.lz4"
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_9766102.tar.lz4"
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
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/kava/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kava`

