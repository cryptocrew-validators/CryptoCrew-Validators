## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 656 | Reactivate expired IBC client 07-tendermint-2229 | Fri Oct 20 2023 04:17:13 UTC | ⏳ NOT VOTED |
| 657 | 💫 Celestia is coming to Osmosis  | Mon Oct 23 2023 02:56:52 UTC | ABSTAIN |
| 658 | Osmosis v20 Software Upgrade | Mon Oct 23 2023 09:02:54 UTC | ⏳ NOT VOTED |

---

### 🗳 656: Reactivate expired IBC client 07-tendermint-2229
- Voting Start: Sun Oct 15 2023 04:17:13 UTC
- Voting End: Fri Oct 20 2023 04:17:13 UTC

<details>
<summary>Proposal Text</summary>
 
Due to a relayer issue that resulted in the subject client exceeding the trusting period, the IBC client 07-tendermint-2229 used by channel-382 for OSMO transfers from Osmosis to Unification via IBC is currently in an expired state. If accepted, this proposal will reactivate the expired IBC client 07-tendermint-2229, using data from client 07-tendermint-2999. This is required to re-enable IBC transfers to Osmosis on channel-382
</details>

---

### 🗳 657: 💫 Celestia is coming to Osmosis 
- Voting Start: Wed Oct 18 2023 02:56:52 UTC
- Voting End: Mon Oct 23 2023 02:56:52 UTC

<details>
<summary>Text hidden (blacklist match)</summary>
 
</details>

---

### 🗳 658: Osmosis v20 Software Upgrade
- Voting Start: Wed Oct 18 2023 09:02:54 UTC
- Voting End: Mon Oct 23 2023 09:02:54 UTC

<details>
<summary>Proposal Text</summary>
 
This is a proposal to do a software upgrade to the v20.0.0 software tag of the Osmosis codebase on block height **12028900**, which is estimated to occur on **Monday October 23rd, UTC 16:00**. Block times have high variance, so please monitor the chain for more precise time estimates. 
 ## Upgrade Features 
This upgrade adds the following features: 
**[Volume Splitting Incentives Mechanism](https://github.com/osmosis-labs/osmosis/issues/6057)** 
* Adds a new incentives mechanism that allows pools to be grouped into Volume Splitting Gauges and be incentivized as a set. 
* Incentives for pools within this set will re-adjust at each epoch to the volume ratio present in each pool over the last epoch. 
* This allows multiple pools of the same pairing with different specifications to be incentivized to allow incentives to be optimized around trading volume more rapidly. 
* This upgrade proposal creates groups containing the Classic and Supercharged pools with existing migration links between them and moves incentive allocation to incentivize these group gauges rather than the previous mechanism of sharing via the migration link. 

**Concentrated Liquidity modifications** 
* Concentrated Liquidity positions [can now be transferred](https://github.com/osmosis-labs/osmosis/pull/6623) to another address
* Added a parameter that allows governance to add addresses that can [create concentrated liquidity pools ignoring the Quote asset whitelist restriction](https://github.com/osmosis-labs/osmosis/pull/6420). 
* Added a parameter that allows governance to [add addresses that will be exempt from Taker Fees](https://github.com/osmosis-labs/osmosis/pull/6632). 

**Validator Set Preferences** 
* Allows users with defined validator sets to [unbond a pro rata amount of OSMO from all validators they are currently delegated to](https://github.com/osmosis-labs/osmosis/pull/6630). 

See the [Full Change Log](https://github.com/osmosis-labs/osmosis/blob/v20.0.0/CHANGELOG.md) for more API Breaking, State Breaking and other miscellaneous changes. 

## Getting Prepared for the Upgrade 
To build the binary, be sure to install golang 1.20. 
As always, we recommend validators utilize 64GB of RAM. Since state migration is relatively negligible in this upgrade, it is possible to get away with less, but still not recommended. If you are unable to have 64GB of RAM, at a minimum have a total of 64GB of swap set to prevent out of memory errors. 
If using Cosmovisor, manually build & copy the osmosisd binary to /cosmovisor/upgrades/v20/bin/. 
If not using Cosmovisor, wait for your node to halt at the upgrade height, then install and run the v20.0.0 binary. 
## Details of Upgrade Time 
The proposal targets the upgrade proposal block to be **12028900**, anticipated to be on **Monday October 23rd, UTC 16:00**. Note that block times have high variance, so keep monitoring the time. See countdown [HERE](https://www.mintscan.io/osmosis/block/12028900). 
The upgrade is anticipated to take approx 30 minutes, during which time, there will not be any on-chain activity on the network. 
In the event of an issue at upgrade time, we should coordinate via the validators channel in Discord to come to a quick emergency consensus and mitigate any further issues.
</details>
