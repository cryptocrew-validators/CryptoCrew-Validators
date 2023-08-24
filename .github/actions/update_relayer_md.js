const fs = require('fs');
const path = require('path');

function readJSONFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

function generateMDTable(relayers, chains) {
    const relayerChains = {};
    const walletsByChain = {};

    const channelSet = new Set();

    for (const relayer of relayers.relayers) {
        for (const chain of relayer.chains) {
            const chainId = chain.chain_id;

            if (!relayerChains[chainId]) {
                relayerChains[chainId] = [];
            }

            for (const channel of chain.channels) {
                const uniqueChannelIdentifier = `${chainId}-${channel.dst_chain_id}-${channel.port_id}-${channel.channel_id}`;

                if (!channelSet.has(uniqueChannelIdentifier)) {
                    channelSet.add(uniqueChannelIdentifier);
                    relayerChains[chainId].push(channel);
                }
            }

            if (!walletsByChain[chainId]) {
                walletsByChain[chainId] = new Set();
            }
            for (const wallet of chain.wallets) {
                walletsByChain[chainId].add(wallet);
            }
        }
    }

    for (const chain of chains.chains) {
        const chainId = chain.chain_id;
        const channels = relayerChains[chainId];
        const dstChannels = findDstChannels(relayers, chainId);

        if (!chain.relayer_accounts) {
            chain.relayer_accounts = [];
        }
        chain.relayer_accounts.push(...Array.from(walletsByChain[chainId] || []));
        chain.relayer_accounts = [...new Set(chain.relayer_accounts)];

        if (channels || dstChannels.length > 0) {
            const mdContent = generateMDContent(channels, dstChannels, chain);
            const outputPath = path.join('chains', chain.name, 'service_IBC_Relayer.md');
            fs.writeFileSync(outputPath, mdContent);

            const matchingRelayerChain = relayers.relayers.find(relayer => {
                return relayer.chains.some(relayerChain => relayerChain.chain_id === chainId);
            });
    
            if (matchingRelayerChain) {
                const relayerWallets = matchingRelayerChain.wallets || [];
                
                if (relayerWallets.length > 0) {
                    chain.relayer_wallets = [...new Set(relayerWallets)];
    
                    fs.writeFileSync('chains.json', JSON.stringify(chains, null, 2));
                }
            }
        }
    }
}


function findDstChannels(relayers, dstChainId) {
    const dstChannels = [];

    for (const relayer of relayers.relayers) {
        for (const chain of relayer.chains) {
            for (const channel of chain.channels) {
                if (channel.dst_chain_id === dstChainId) {
                    dstChannels.push({
                        ...channel,
                        chain_id: chain.chain_id
                    });
                }
            }
        }
    }

    return dstChannels;
}

function generateMDContent(srcChannels, dstChannels, chain) {
    const wallets = chain.relayer_accounts && chain.relayer_accounts.length > 0
        ? `Active Relayer Accounts:\n\`\`\`\n${chain.relayer_accounts.map(wallet => `${wallet}`).join('\n')}\n\`\`\`\n\n`
        : '';
    const header = `## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

${wallets}### Active IBC channels \`${chain.name}\`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |\n`;
    
    const uniqueSrcChannels = new Set(srcChannels.map(channel => JSON.stringify(channel)));
    const uniqueDstChannels = new Set(dstChannels.map(channel => JSON.stringify(channel)));

    const srcRows = [...uniqueSrcChannels].map(channel => {
        const parsedChannel = JSON.parse(channel);
        return `| ${chain.chain_id} | ${parsedChannel.dst_chain_id} | ${parsedChannel.port_id} | ${parsedChannel.channel_id} |`;
    }).join('\n');

    const dstRows = [...uniqueDstChannels].map(channel => {
        const parsedChannel = JSON.parse(channel);
        return `| ${parsedChannel.chain_id} | ${chain.chain_id} | ${parsedChannel.port_id} | ${parsedChannel.channel_id} |`;
    }).join('\n');

    return header + (srcRows && dstRows ? srcRows + '\n' + dstRows : srcRows || dstRows);
}

const relayers = readJSONFile('relayers.json');
const chains = readJSONFile('chains.json');

generateMDTable(relayers, chains);