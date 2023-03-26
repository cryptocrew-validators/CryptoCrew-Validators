| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_794636.tar.lz4) | Sun Mar 26 13:04:37 CEST 2023 | mars-1 | 657M | 6dd87a7fbf64c06a7b909e9713d65ba622af7f479b4a53c8af004dc665a2d4d2 |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_765360.tar.lz4) | Fri Mar 24 12:55:33 CET 2023 | mars-1 | 769M | 4acf1c8bff2ced902b20635e2c6b0cd4f40031569597d66cc440e778c1f2b338 |
 
---
## download instructions
 
```sh
sudo apt install aria2 lz4
$URL=<paste URL>
cd $HOME/.mars
rm -rf data
aria2c -x5 $URL
md5sum `basename $URL`
lz4 -d `basename $URL` | tar xf -
sudo systemctl start marsd
```
*or (single-stream: no double disk-space needed, but slower and no possibility to check hash)*
```sh
cd $HOME/.mars
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
sudo systemctl start marsd
```
