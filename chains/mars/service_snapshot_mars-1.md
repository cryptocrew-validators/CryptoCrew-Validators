| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_898967.tar.lz4) | Sun Apr  2 12:54:48 PM CEST 2023 | mars-1 | 831M | d77087f78761cf0659c857af5c9ff08c9a1a212726e221a82f7bf372a6815d0f |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_854222.tar.lz4) | Thu Mar 30 12:54:59 PM CEST 2023 | mars-1 | 719M | bb08dc032c1e398f7111210306156832ecb4cd211486a81156c30c12fa40256d |
 
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
