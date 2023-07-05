| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2299945.tar.lz4) | Wed Jul  5 15:51:11 UTC 2023 | mars-1 | 791M | d6331903f7aad0ab9c4eacc406605b70ee81dc28c3572dd9ead776ba49f2babb |
| [DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2299933.tar.lz4) | Wed Jul  5 15:49:57 UTC 2023 | mars-1 | 704M | 3ab9d14525045e26a97db7d3d0682ebd8645873b1c6724673314b661dbef4ff8 |
 
---
## download instructions
 
```sh
sudo apt install aria2 lz4
$URL=https://dl.ccvalidators.com/SNAPSHOTS/mars/mars-1_2299945.tar.lz4
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
