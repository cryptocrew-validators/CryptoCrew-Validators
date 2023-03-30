| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_854222.tar.lz4) | Thu Mar 30 12:54:59 PM CEST 2023 | mars-1 | 719M | bb08dc032c1e398f7111210306156832ecb4cd211486a81156c30c12fa40256d |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_824372.tar.lz4) | Tue Mar 28 12:54:26 PM CEST 2023 | mars-1 | 763M | eca570d64dada34c3256b95667d6383d7d9878330cfc7a6374ee6dc2b03f6cd4 |
 
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
