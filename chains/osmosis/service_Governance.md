## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 696 | Osmosis v21 Software Upgrade | Mon Dec 18 2023 11:41:05 UTC | ✅ YES |

---

### 🗳 696: Osmosis v21 Software Upgrade
- Voting Start: Wed Dec 13 2023 11:41:05 UTC
- Voting End: Mon Dec 18 2023 11:41:05 UTC

<details>
<summary>Proposal Text</summary>
 
This is a proposal to do a software upgrade to the v21.0.0 software tag of the Osmosis codebase on block height 12834100, which is estimated to occur on Monday December 18th, UTC 16:00. Block times have high variance, so please monitor the chain for more precise time estimates. 

# Upgrade Features 
This upgrade adds the following features: 

## [Cosmos SDK Updated to v0.47.x](https://github.com/osmosis-labs/osmosis/pull/6413) 
* Moves Osmosis towards using the mainline Cosmos SDK version 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Reduces overhead of maintaining a highly divergent fork 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Makes future sdk upgrades simpler 
 README.md ccv.png ccvalidators_logo.png chains chains.json chains.schema.json cosmoshub_service_Governance.md cryptocrew-validators-logo.png osmosis_service_Governance.md relayers.json relayers.schema.json reports solva_logo.png update_governance_info.sh Allows Osmosis improvements to be upstreamed to other Cosmos chains. 

## [Protocol Revenue Tracking](https://github.com/osmosis-labs/osmosis/pull/6804) 
* Taker fees, Transaction Fees and Cyclic Arb revenue are now all queryable on chain via the protorev module. 

## [Sidecar Query Server](https://github.com/osmosis-labs/osmosis/pull/6953) 
* External service that allows the calculation of optimal routes through Osmosis pools for transactions to be queried by third parties. 

## Miscellaneous 
* Concentrated liquidity hooks added to [core CL logic](https://github.com/osmosis-labs/osmosis/pull/6859) in advance of [allowing hook contracts to be linked](https://github.com/osmosis-labs/osmosis/issues/6943). 
* EstimateTradeBasedOnPriceImpact [added to Stargate whitelist](https://github.com/osmosis-labs/osmosis/pull/6814). 
* ProtoRev module [no longer pays Taker Fees](https://github.com/osmosis-labs/osmosis/pull/6861) on arbitrage backruns, improving the alignment between differing liquidity locations. 
* Several improvements relating to mempool filtering, [previously present in v20.x releases](https://github.com/osmosis-labs/osmosis/pull/6858). 
* Wasmd [updated to v0.45.0 and wasmvm to 1.5.0](https://github.com/osmosis-labs/osmosis/pull/6937) 

See the [Full Change Log](https://github.com/osmosis-labs/osmosis/blob/v21.0.0/CHANGELOG.md) for more API Breaking, State Breaking and other miscellaneous changes. 
## Getting Prepared for the Upgrade 
To build the binary, be sure to install golang >= 1.20. 
As always, we recommend validators utilize 64GB of RAM. Since state migration is relatively negligible in this upgrade, it is possible to get away with less, but still not recommended. If you are unable to have 64GB of RAM, at a minimum have a total of 64GB of swap set to prevent out of memory errors. 
If using Cosmovisor, manually build & copy the osmosisd binary to /cosmovisor/upgrades/v21/bin/. 
If not using Cosmovisor, wait for your node to halt at the upgrade height, then install and run the v21.0.0 binary. 
## Details of Upgrade Time 
The proposal targets the upgrade proposal block to be **12834100**, anticipated to be on **Monday December 18th, UTC 16:00**. Note that block times have high variance, so keep monitoring the time. See countdown [HERE](https://www.mintscan.io/osmosis/block/12834100). 
The upgrade is anticipated to take approx 30 minutes, during which time, there will not be any on-chain activity on the network. 
In the event of an issue at upgrade time, we should coordinate via the validators channel in Discord to come to a quick emergency consensus and mitigate any further issues.
</details>
