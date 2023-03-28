| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_824372.tar.lz4) | Tue Mar 28 12:54:26 PM CEST 2023 | mars-1 | 763M | eca570d64dada34c3256b95667d6383d7d9878330cfc7a6374ee6dc2b03f6cd4 |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_794636.tar.lz4) | Sun Mar 26 01:04:37 PM CEST 2023 | mars-1 | 657M | 6dd87a7fbf64c06a7b909e9713d65ba622af7f479b4a53c8af004dc665a2d4d2 |
 
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
