const fs = require('fs');
const path = require('path');

function readJSONFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

function generateMDTable(relayers, chains) {
    const relayerChains = {};
    const relayerAccounts = {};

    for (const relayer of relayers.relayers) {
        for (const chain of relayer.chains) {
            const chainId = chain.chain_id;
            if (!relayerChains[chainId]) {
                relayerChains[chainId] = [];
                relayerAccounts[chainId] = [];
            }
            relayerChains[chainId].push(...chain.channels);
            if (chain.relayer_accounts && chain.relayer_accounts.length > 0) {
                relayerAccounts[chainId].push(...chain.relayer_accounts);
            }
        }
    }

    for (const chain of chains.chains) {
        const chainId = chain.chain_id;
        const channels = relayerChains[chainId];
        const accounts = relayerAccounts[chainId] || [];
        const dstChannels = findDstChannels(relayers, chainId);

        if (channels || dstChannels.length > 0) {
            const mdContent = generateMDContent(channels, dstChannels, chain, accounts);
            const outputPath = path.join('chains', chain.name, 'service_IBC_Relayer.md');
            fs.writeFileSync(outputPath, mdContent);
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

function generateMDContent(srcChannels, dstChannels, chain, accounts) {
    const wallets = accounts && accounts.length > 0
        ? `Active Relayer Accounts:\n\`\`\`\n${accounts.map(wallet => `${wallet}`).join('\n')}\n\`\`\`\n\n`
        : '';
    const header = `## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

${wallets}### Active IBC channels \`` + chain.name + `\`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |\n`;
    const srcRows = srcChannels ? srcChannels.map(channel => `| ${chain.chain_id} | ${channel.dst_chain_id} | ${channel.port_id} | ${channel.channel_id} |`).join('\n') : '';
    const dstRows = dstChannels.map(channel => `| ${channel.chain_id} | ${chain.chain_id} | ${channel.port_id} | ${channel.channel_id} |`).join('\n');

    return header + srcRows + (srcRows && dstRows ? '\n' : '') + dstRows;
}

const relayers = readJSONFile('relayers.json');
const chains = readJSONFile('chains.json');
generateMDTable(relayers, chains);
