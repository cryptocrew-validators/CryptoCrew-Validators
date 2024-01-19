## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 28 | OmniFlix Hub v2 Software Upgrade | Sat Jan 20 2024 13:57:29 UTC | ✅ YES |

---

### 🗳 28: OmniFlix Hub v2 Software Upgrade
- Voting Start: Fri Jan 12 2024 13:57:29 UTC
- Voting End: Sat Jan 20 2024 13:57:29 UTC

<details>
<summary>Proposal Text</summary>
 
## Overview
This governance proposal is presented for your consideration and approval of the proposed updates to the omniflixhub (upgrading the software version from v0.12.x to v2.0.0).

## Upgrade name
v2

## Upgrade height
[10428200](https://www.mintscan.io/omniflix/blocks/10428200)

## Upgrade details

- ### New Modules
 - **globalfee** - manages minimum gas fees at network level
 - **tokenfactory** - allows any account to create a new token with the name factory/{creator address}/{subdenom}
 - **async-icq (interchain queries)** - enable blockchains to query the state of an account on another chain without the need for ICA auth
 - **group (cosmos-sdk)** - allows the creation and management of on-chain multisig accounts and enables voting for message execution based on configurable decision policies
 - **nft-transfer (ics721 ibc nft transfer)** - enables cross chain NFT transfer 

- ### Migrations
 - **cosmos-sdk migration:** v0.45.x to v0.47.x
 - **x/params module migration:** all modules params will be stored on it's own store instead of params subspace
 - **onft migration:** onft module store migration to x/nft (cosmos-sdk nft module) to be compatible with ics721 nft transfers
 - **ibc-go migrations:** migrating ibc-go v4.4.x to v7.3.x

- ### Module Updates
 - streampay v2.2.0 (percentage based fee for stream creation)
 - cosmos-sdk v0.47.5
 - cometbft v0.37.2
 - ibc-go v7.3.1

## Upgrade instructions
- Upgrade guide:
[https://github.com/OmniFlix/docs/blob/main/guides/mainnet/omniflixhub-1/upgrades/v2-upgrade.md](https://github.com/OmniFlix/docs/blob/main/guides/mainnet/omniflixhub-1/upgrades/v2-upgrade.md)
- Release tag:
[https://github.com/OmniFlix/omniflixhub/releases/tag/v2.0.0](https://github.com/OmniFlix/omniflixhub/releases/tag/v2.0.0)

## Voting

The opinion of the community is highly valued. All stakeholders are invited to vote on this proposal. The voting options are as follows:

- **Yes**: Agreement with the proposed updates and a desire for their implementation.
- **No**: Disagreement with the proposed updates and a preference against their implementation.
- **Abstain**: A choice not to vote in favor or against the proposal but accept the result of the vote.
- **NoWithVeto**: A strong disagreement with the proposed updates and a desire to veto them.

All stakeholders are encouraged to participate in the voting process. Each vote matters and will help shape the future of the OmniFlix Hub.

Interact with the community on:
- [Twitter](https://twitter.com/OmniFLixNetwork)
- [Discord](https://discord.com/invite/6gdQ4yZSTC)
- [Telegram](https://t.me/OmniFlixChat)
</details>
