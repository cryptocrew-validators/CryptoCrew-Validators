# TERRA LEGACY IBC re-activation

Terra legacy v0.5.20 upgrade closed three IBC-channels on columbus-5 to prevent possible attack vectors via liquid staking modules

"channel-1", // Osmosis  
"channel-49", // Crescent  
"channel-20", // Juno  

Since at the time of the Terra legacy attack relayers were working behind the backlog due to immense transaction volumes, some IBC packets on these channels were not able to be processed in time before the emergency upgrade. These userfunds are now "stuck" on chain.

Subsequently the IBC-clients on the counterparty chains expired, adding a level of complexity to the issue

## Update (02/06/2022)

Working together with Notional Labs on the issue, created commonwealth thread to inform the public & discuss about the strategy going forward

https://commonwealth.im/osmosis/discussion/5223-replace-terra-columbus5-ibc-client

**TODO:**

- get OK to go forward from osmosis and juno chain-devs & communities

- re-open previously closed IBC-channels on Terra legacy through chain upgrade 

ref: https://github.com/terra-money/classic-core/issues/766)  
diff: https://github.com/terra-money/classic-core/compare/v0.5.19...v0.5.20#diff-0f1d2976054440336a576d47a44a37b80cdf6701dd9113012bce0e3c425819b7L585-R615

- update expired IBC-clients on osmosis and juno through governance proposals

## Current channel & client states

### terra classic <> osmosis

columbus-5 channel-1:
```
{
  "channel": {
    "state": "STATE_CLOSED",
    "ordering": "ORDER_UNORDERED",
    "counterparty": {
      "port_id": "transfer",
      "channel_id": "channel-72"
    },
    "connection_hops": [
      "connection-11"
    ],
    "version": "ics20-1"
  },
  "proof": null,
  "proof_height": {
    "revision_number": "5",
    "revision_height": "7868655"
  }
}
```

**corresponding osmosis channel is in open state:**

osmosis-1 channel-72:
```
{
  "channel": {
    "state": "STATE_OPEN",
    "ordering": "ORDER_UNORDERED",
    "counterparty": {
      "port_id": "transfer",
      "channel_id": "channel-1"
    },
    "connection_hops": [
      "connection-1215"
    ],
    "version": "ics20-1"
  },
  "proof": null,
  "proof_height": {
    "revision_number": "1",
    "revision_height": "4637897"
  }
}
```



columbus-5 07-tendermint-12
```
/ibc/core/client/v1/client_status/07-tendermint-12
{
  "status": "Expired"
}

"allow_update_after_expiry": true,
"allow_update_after_misbehaviour": true
```

osmosis-1 07-tendermint-1549:
```
/ibc/core/client/v1/client_status/07-tendermint-1549
{
  "status": "Active"
}

"allow_update_after_expiry": true,
"allow_update_after_misbehaviour": true
```

### terra classic <> juno

columbus-5 channel-20:
```
{
  "channel": {
    "state": "STATE_CLOSED",
    "ordering": "ORDER_UNORDERED",
    "counterparty": {
      "port_id": "transfer",
      "channel_id": "channel-27"
    },
    "connection_hops": [
      "connection-34"
    ],
    "version": "ics20-1"
  },
  "proof": null,
  "proof_height": {
    "revision_number": "5",
    "revision_height": "7869005"
  }
}
```


**corresponding juno channel is in open state:**

juno-1 channel-27:
```
{
  "channel": {
    "state": "STATE_OPEN",
    "ordering": "ORDER_UNORDERED",
    "counterparty": {
      "port_id": "transfer",
      "channel_id": "channel-20"
    },
    "connection_hops": [
      "connection-43"
    ],
    "version": "ics20-1"
  },
  "proof": null,
  "proof_height": {
    "revision_number": "1",
    "revision_height": "3355245"
  }
}
```

columbus-5 07-tendermint-32
```
/ibc/core/client/v1/client_status/07-tendermint-32
{
  "status": "Expired"
}

"allow_update_after_expiry": true,
"allow_update_after_misbehaviour": true
```

juno-1 07-tendermint-63:
```
/ibc/core/client/v1/client_status/07-tendermint-63
{
  "status": "Active"
}

"allow_update_after_expiry": true,
"allow_update_after_misbehaviour": true
```

### terra classic <> crescent:

columbus-5 channel-49:
```
{
  "channel": {
    "state": "STATE_CLOSED",
    "ordering": "ORDER_UNORDERED",
    "counterparty": {
      "port_id": "transfer",
      "channel_id": "channel-0"
    },
    "connection_hops": [
      "connection-70"
    ],
    "version": "ics20-1"
  },
  "proof": null,
  "proof_height": {
    "revision_number": "5",
    "revision_height": "7868992"
  }
}
```

columbus-5 07-tendermint-101
```
/ibc/core/client/v1/client_status/07-tendermint-101
{
  "status": "Active"
}
```

crescent-1 07-tendermint-0
```
/ibc/core/client/v1/client_status/07-tendermint-101
{
  "status": "Active"
}
```