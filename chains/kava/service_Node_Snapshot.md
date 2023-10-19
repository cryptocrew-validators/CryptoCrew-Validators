## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kava version: `v0.24.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6958803.tar.lz4)** | Thu Oct 19 2023 07:12:38 UTC | `kava_2222-10` | 14G | 6958803 | `a2560fa07907515cab3ad45d9436bec4ba24718cbebeb94831fb06b0f850cf06` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6953820.tar.lz4)** | Wed Oct 18 2023 22:50:26 UTC | `kava_2222-10` | 12G | 6953820 | `69947b44e25adf48322c4ad56d8b2eca08939a65140b7a52231c4d0c6386035c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6958803.tar.lz4"
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/kava/kava_2222-10_6958803.tar.lz4"
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

