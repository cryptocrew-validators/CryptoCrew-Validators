## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
loyald version: `v0.25.3`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/loyal-main-02_3895458.tar.lz4)** | Mon Aug 28 2023 04:37:05 UTC | `loyal-main-02` | 29M | 3895458 | `304ddd38e145f84859c36c243d50a1ae7c4585ade89f89dc63799a233e7a3c82` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/loyal-main-02_3880007.tar.lz4)** | Sun Aug 27 2023 04:36:58 UTC | `loyal-main-02` | 29M | 3880007 | `a067dac80dd7074e975e330b4628b54b59bbf2258470fb39d599906312c22043` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_3895458.tar.lz4"
cd $HOME/.loyal
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget $URL
wget $URL.sha256
diff -s <(sha256sum $(basename $URL) | awk '{print $1}') <(cat $(basename $URL).sha256)
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/loyal/loyal-main-02_3895458.tar.lz4"
cd $HOME/.loyal
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```





## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/loyal/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start loyald`

