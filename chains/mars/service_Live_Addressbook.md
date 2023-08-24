## Live Addressbook File
CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

<div class="panel panel-success">
**Do's**
{: .panel-heading}
<div class="panel-body">

**Download: [mars-1 addrbook.json](https://dl.ccvalidators.com/SERVICE/mars/addrbook.json)**

</div>
</div>
- last updated: Thu Aug 24 2023 16:01:49
- available peers: 216
- total peers (network scan): 791

## Instructions
```sh
# Stop the node
sudo systemctl stop "marsd"

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/mars/addrbook.json"
wget -4 "$URL" -P "$README_DAEMON_HOME/config/addrbook.json"

# Start the node
sudo systemctl start "marsd"
```
