| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_735482.tar.lz4) | Wed Mar 22 12:44:39 CET 2023 | mars-1 | 662M | 0dfee381e89d9406999c743de73b5dcd69437c049622fa68398c5d4c7d9aeb5c |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_735313.tar.lz4) | Wed Mar 22 12:27:50 CET 2023 | mars-1 | 693M | a9348cb637be3d5ff622e981317f396968039f38e642f95da95831b7120b8798 |
 
---
## download instructions
 
```sh
sudo apt install aria2 lz4
$URL=<paste URL>
cd $HOME/.mars
rm -r data
aria2c -x5 $URL
md5sum `basename $URL`
lz4 -d `basename $URL` | tar xf -
sudo systemctl start marsd
```
*or (single-stream: no double disk-space needed, but slower and no possibility to check hash)*
```sh
cd $HOME/.mars
rm -r data
wget -O - $URL | lz4 -d | tar -xvf -
sudo systemctl start marsd
```
