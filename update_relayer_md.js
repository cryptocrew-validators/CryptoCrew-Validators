const fs = require('fs');
const path = require('path');

function readJSONFile(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

function generateMDTable(relayers, chains) {
  const relayerChains = {};

  for (const relayer of relayers.relayers) {
    for (const chain of relayer.chains) {
      const chainId = chain.chain_id;
      if (!relayerChains[chainId]) {
        relayerChains[chainId] = [];
      }
      relayerChains[chainId].push(...chain.channels);
    }
  }

  for (const chain of chains.chains) {
    const chainId = chain.chain_id;
    const channels = relayerChains[chainId];
    if (channels) {
      const mdContent = generateMDContent(channels, chain);
      const outputPath = path.join('chains', chain.name, 'service_ibc_relayer.md');
      fs.writeFileSync(outputPath, mdContent);
    }
  }
}

function generateMDContent(channels, chain) {
  const header = '## CryptoCrew IBC relayer\n\n| src_chain | dst_chain | IBC port | IBC channel |\n| --------------- | --------------- | ------------ | -------------- |\n';
  const rows = channels.map(channel => `| ${chain.chain_id} | ${channel.dst_chain_id} | ${channel.port_id} | ${channel.channel_id} |`).join('\n');

  return header + rows;
}

const relayers = readJSONFile('relayers.json');
const chains = readJSONFile('chains.json');
generateMDTable(relayers, chains);
