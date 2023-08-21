CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
kujirad version: `v0.8.7`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/kaiyo-1_13460172.tar.lz4)** | Mon Aug 21 2023 19:31:23 UTC | `kaiyo-1` | 14G | 13460172 | `e7783ca69f449434d59fb481b570d74de69a4a70a35174139db5458762e9ef14` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/$CHAIN_NAME/kaiyo-1_13452179.tar.lz4)** | Mon Aug 21 2023 12:23:46 UTC | `kaiyo-1` | 5.4G | 13452179 | `7136df854c3dd884800d6ae3a8740512d4ff6ee7d7d36b22abc43c48fced3284` |
 
---
## Download instructions
 
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/kujira/kaiyo-1_13460172.tar.lz4
cd $HOME/.kujira
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
diff -s <(sha256sum `basename $URL` | awk '{print $1}') <(cat `basename $URL`.sha256)
lz4 -d `basename $URL` | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Or single-stream:**  
(no double disk-space needed, but slower and not possible to check checksum)
```sh
sudo apt install wget lz4
URL=https://dl.ccvalidators.com/SNAPSHOTS/kujira/kaiyo-1_13460172.tar.lz4
cd $HOME/.kujira
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```
**Optional: Download `wasm` folder only**  
(In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases)
```sh
URL=https://dl.ccvalidators.com/SNAPSHOTS/kujira/kaiyo-1_wasm.tar.lz4
cd $HOME/.kujira
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```
## Using the download script
 
The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
 
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/kujira/download_snapshot.sh | bash
```
---
After downloading and extracting the snapshot, start the daemon: `sudo systemctl start kujirad`
