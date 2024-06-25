## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
gaiad version: `v17.2.0`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_21016377.tar.lz4)** | Tue Jun 25 2024 10:55:25 UTC | `cosmoshub-4` | 16G | 21016377 | `f86e169267ff598bf283e5ed15572a4555c4ec91dfda326e8991f1bcba0c4415` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_21002270.tar.lz4)** | Mon Jun 24 2024 11:01:56 UTC | `cosmoshub-4` | 13G | 21002270 | `` |
| **[DOWNLOAD](https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_20988139.tar.lz4)** | Sun Jun 23 2024 10:55:46 UTC | `cosmoshub-4` | 16G | 20988139 | `` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_21016377.tar.lz4"
cd $HOME/.gaia
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
URL="https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/cosmoshub-4_21016377.tar.lz4"
cd $HOME/.gaia
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu2.ccvalidators.com/SNAPSHOTS/cosmoshub/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start gaiad`

