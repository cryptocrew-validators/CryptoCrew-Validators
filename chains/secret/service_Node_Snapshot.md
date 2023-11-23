## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
secretd version: `v1.12.1`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_.compute.tar.lz4)** | Thu Nov 23 2023 17:06:39 UTC | `secret-4` | 176M |  | `` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_11683060.tar.lz4)** | Thu Nov 23 2023 17:06:32 UTC | `secret-4` | 31G | 11683060 | `e20b67dae5f48e958aaedcaa27ec0c75e7f645eaf7243588503c1334fe05e083` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_11650496.tar.lz4)** | Tue Nov 21 2023 12:05:49 UTC | `secret-4` | 1.8G | 11650496 | `` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_11683060.tar.lz4"
cd $HOME/.secretd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data .compute
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
URL="https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_11683060.tar.lz4"
cd $HOME/.secretd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data .compute
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```



### Optional: Download `.compute` folder only
It is possible to statesync `secret-4` when retaining the `$HOME/.secretd/.compute` folder. We provide daily updated .compute snapshots below:
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/secret/secret-4_.compute.tar.lz4"
cd $HOME/.secretd
rm -rf .compute
wget -O - $URL | lz4 -d | tar -xvf -
```

## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/secret/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start secretd`

