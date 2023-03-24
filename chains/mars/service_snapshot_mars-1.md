| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_765360.tar.lz4) | Fri Mar 24 12:55:33 PM CET 2023 | mars-1 | 769M | 4acf1c8bff2ced902b20635e2c6b0cd4f40031569597d66cc440e778c1f2b338 |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_735587.tar.lz4) | Wed Mar 22 12:54:20 PM CET 2023 | mars-1 | 666M | 83053533d5a14bcef9e14e9e92e936d0fe557a9ca211c8eeedd4356720b3d7f7 |
 
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
