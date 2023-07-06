| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_121874.tar.lz4) | Thu Jul  6 10:44:05 UTC 2023 | empowerchain-1 | 399M | 260dc4b372d4e9aa9a83f40f885e2b6bfa4597c8728dbfc637d9d07487be4eba  /home/service/SNAPSHOTS/empowerchain/empowerchain-1_121874.tar.lz4 |
 
---
## download instructions
 
```sh
sudo apt install aria2 lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_121874.tar.lz4
cd /home/empowerchain/.empowerd
rm -rf data wasm
aria2c -x5 $URL
md5sum `basename $URL`
lz4 -d `basename $URL` | tar xf -
sudo systemctl start empowerd
```
*or (single-stream: no double disk-space needed, but slower and no possibility to check hash)*
```sh
cd /home/empowerchain/.empowerd
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
sudo systemctl start empowerd
```
