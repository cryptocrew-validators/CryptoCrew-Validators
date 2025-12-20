## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
lumerad version: `v1.8.5`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2851135.tar.lz4)** | Sat Dec 20 2025 18:45:19 UTC | `lumera-mainnet-1` | 918M | 2851135 | `5e59944f719b9918b01f21fefec1078507fa4a3111409735e00877b7a855edd0` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2821378.tar.lz4)** | Thu Dec 18 2025 18:45:19 UTC | `lumera-mainnet-1` | 900M | 2821378 | `8ac372a47620a8f7d2c20d87a6c30122254a05749fd47a94a19abb382000fa44` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2790818.tar.lz4)** | Tue Dec 16 2025 18:45:20 UTC | `lumera-mainnet-1` | 833M | 2790818 | `ba63659d6cf2b3f1067ec49001aad08aff5f2257a5ba797e5db34a7a016fef96` |
| **[DOWNLOAD](https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2760262.tar.lz4)** | Sun Dec 14 2025 18:45:17 UTC | `lumera-mainnet-1` | 749M | 2760262 | `ecab060132ce3a4426f7ab67e4486f06671197c3ecdbe4a988ba0b174c078036` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2851135.tar.lz4"
cd $HOME/.lumera
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
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
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_2851135.tar.lz4"
cd $HOME/.lumera
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/lumera-mainnet-1_wasm.tar.lz4"
cd $HOME/.lumera
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl-eu1.ccvalidators.com/SNAPSHOTS/lumera/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start lumerad`

