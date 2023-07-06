#!/bin/bash
URL="https://dl.ccvalidators.com/SNAPSHOTS/empowerchain/empowerchain-1_122793.tar.lz4"
echo snapshot download finished!
cd $HOME/.empowerchain
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm || true
wget -O - $URL | tee >(sha256sum > `basename $URL`.sha256) | lz4 -d | tar -xvf -
diff <(sha256sum `basename $URL` | cut -d " " -f 1) <(cut -d " " -f 1 `basename $URL`.sha256)
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
echo snapshot download finished!
wget -O - $URL | tee >(sha256sum > `basename $URL`.sha256) | lz4 -d | tar -xvf -
diff <(sha256sum `basename $URL` | cut -d " " -f 1) <(cut -d " " -f 1 `basename $URL`.sha256)
