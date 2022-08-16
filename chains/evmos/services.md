# EVMOS services

chain_id: `evmos_9001-2`

validator_address: `evmosvaloper1qhazu8zleyn5chrkxymewx3xw5guq2vm6q7zl0`

public mainnet seednode: `ef5c6a54037073b41577d884bdea642d900b8c99@tenderseed.ccvalidators.com:26006`

## CryptoCrew IBC relayer

| src_chain | dst_chain | IBC port | IBC channel |    
| --------------- | --------------- | ------------ | -------------- |
| `evmos_9001-2`  | `osmosis-1` | `transfer` | `channel-0` | 
| `evmos_9001-2`  | `cosmoshub-4` | `transfer` | `channel-3` | 
| `evmos_9001-2`  | `juno-1` | `transfer` | `channel-5` | 
| `evmos_9001-2`  | `secret-4` | `transfer` | `channel-15` | 
| `evmos_9001-2`  | `gravity-bridge-3` | `transfer` | `channel-8` | 
| `evmos_9001-2`  | `stargaze-1` | `transfer` | `channel-13` | 
| `evmos_9001-2`  | `injective-1` | `transfer` | `channel-10` | 