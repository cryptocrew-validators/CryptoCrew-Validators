| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2299933.tar.lz4) | Wed Jul  5 15:49:57 UTC 2023 | mars-1 | 704M | 3ab9d14525045e26a97db7d3d0682ebd8645873b1c6724673314b661dbef4ff8 |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2299914.tar.lz4) | Wed Jul  5 15:48:08 UTC 2023 | mars-1 | 753M | dc09b36fdfab33db3ecf6178427324ddcf4392b2907ac3f9aea1721542e46377 |
 
---
## download instructions
 
```sh
sudo apt install aria2 lz4
$URL=<paste URL>
cd /home/mars/.mars
rm -rf data
aria2c -x5 $URL
md5sum `basename $URL`
lz4 -d `basename $URL` | tar xf -
sudo systemctl start marsd
```
*or (single-stream: no double disk-space needed, but slower and no possibility to check hash)*
```sh
cd /home/mars/.mars
rm -rf data
wget -O - $URL | lz4 -d | tar -xvf -
sudo systemctl start marsd
```
