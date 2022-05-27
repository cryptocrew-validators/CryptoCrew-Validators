# OMNIFLIX services

chain_id: `omniflixhub-1`

validator_address: `omniflixvaloper1smuvvnjj6w7x6ytq9kdgvlj6er99y6645hjfme`

public mainnet seednode: `1247d7039b1cc2b336d3aaa769ea9927f48edb65@omniflix-mainnet.tenderseed.ccvalidators.com`

## CryptoCrew IBC relayer

| src_chain | dst_chain | IBC port | IBC channel |    
| --------------- | --------------- | ------------ | -------------- |
| omniflixhub-1 | osmosis-1 | `transfer` | `channel-1` | 
| omniflixhub-1 | columbus-5 | `transfer` | `channel-4` | 
| omniflixhub-1 | chihuahua-1 | `transfer` | `channel-5` | 
| omniflixhub-1 | stargaze-1 | `transfer` | `channel-8` | 
| omniflixhub-1 | cosmoshub-4 | `transfer` | `channel-12` | 
| omniflixhub-1 | juno-1 | `transfer` | `channel-13` | 
| omniflixhub-1 | gravitybridge-3 | `transfer` | `channel-14` | 

## Omniflix relayer setup guide by CryptoCrew

https://github.com/clemensgg/RELAYER-dev-crew/blob/main/HERMES/omniflix/relayer-doc.md