| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_988454.tar.lz4) | Sat Apr  8 12:55:14 PM CEST 2023 | mars-1 | 842M | a6da58d269a65de70034d91a5e3c8553bda86ae8109b5608d971ee641a88158c |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_1018290.tar.lz4) | Mon Apr 10 12:55:01 PM CEST 2023 | mars-1 | 826M | 65782fbe8103aa95e959a329ee55cd84b6fb36b51d8a89225a9efd0210c05c11 |
 
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
