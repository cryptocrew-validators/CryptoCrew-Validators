| DOWNLOAD | date | chain_id | size | checksum |
| -------- | ---- | -------- | ---- | -------- |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_928882.tar.lz4) | Tue Apr  4 12:55:40 PM CEST 2023 | mars-1 | 889M | fec4fbc75c916ac5bacea1670e5c90336808c986a867f8732e84c60ebac2fc9f |
| [DOWNLOAD](https://quicksync.ccvalidators.com/SNAPSHOTS/mars-1_898967.tar.lz4) | Sun Apr  2 12:54:48 PM CEST 2023 | mars-1 | 831M | d77087f78761cf0659c857af5c9ff08c9a1a212726e221a82f7bf372a6815d0f |
 
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
