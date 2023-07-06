#!/bin/bash
URL="https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122369.tar.lz4"
cd $HOME/.empowerd
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data
wget -O - $URL | tee >(sha256sum > `basename $URL`.sha256) | lz4 -d | tar -xvf -
diff <(sha256sum `basename $URL` | cut -d " " -f 1) <(cut -d " " -f 1 `basename $URL`.sha256)
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
sudo systemctl start empowerd
