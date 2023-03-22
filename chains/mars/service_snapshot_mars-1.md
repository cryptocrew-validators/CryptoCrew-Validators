| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_735587.tar.lz4) | Wed Mar 22 12:54:20 PM CET 2023 | mars-1 | 666M | 83053533d5a14bcef9e14e9e92e936d0fe557a9ca211c8eeedd4356720b3d7f7 |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_735482.tar.lz4) | Wed Mar 22 12:44:39 PM CET 2023 | mars-1 | 662M | 0dfee381e89d9406999c743de73b5dcd69437c049622fa68398c5d4c7d9aeb5c |
 
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
