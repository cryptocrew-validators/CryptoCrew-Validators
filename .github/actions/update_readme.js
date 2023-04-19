const fs = require('fs');
const path = require('path');

const chainsFilePath = path.join(__dirname, '..', '..', 'chains.json');
const readmeFilePath = path.join(__dirname, '..', '..', 'README.md');

// Read chains.json
const chainsData = JSON.parse(fs.readFileSync(chainsFilePath, 'utf8'));
const { chains } = chainsData;

// Generate the validators table
let validatorsTable = '| chain             | Network                    | Validator address                                            | Link                  |\n| ----------------- | -------------------------- | ------------------------------------------------------------ | --------------------- |\n';

for (const chain of chains) {
  validatorsTable += `| \`${chain.name}\` | ${chain.prettyName} | \`${chain.address}\` | [delegate ${chain.symbol}](${chain.stake_link}) |\n`;
}

// Read README.md
let readmeContent = fs.readFileSync(readmeFilePath, 'utf8');

// Replace the validators table in README.md
const tableRegex = /(\| chain)(.|\n)*(\n\|)/;
readmeContent = readmeContent.replace(tableRegex, `${validatorsTable}|`);

// Write the updated content to README.md
fs.writeFileSync(readmeFilePath, readmeContent);

console.log('README.md has been updated.');