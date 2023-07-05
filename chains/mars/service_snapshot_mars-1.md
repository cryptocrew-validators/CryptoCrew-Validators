| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_2299597.tar.lz4) | Wed Jul  5 15:17:40 UTC 2023 | mars-1 | 703M | 3bcf0c0e6c65f20ebbb21864ebc922c1d50e018a40094777570e5d0f79d5553e |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_2299577.tar.lz4) | Wed Jul  5 15:15:44 UTC 2023 | mars-1 | 706M | c1849b04ecbe039adff46e94a49f6480e814f4ed6e94d203f9cd25078016d525 |
 
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
