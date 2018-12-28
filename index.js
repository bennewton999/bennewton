#! /usr/bin/env node

const cfonts = require('cfonts');
const boxen = require('boxen');
const chalk = require('chalk');
const data = require('./myData.js');
const me = require('./me');

const showName = name => {
  const bigName = cfonts.render(name, {
    colors: ['white', 'yellow']
  });

  return bigName.string;
};

const showMe = () => me;

const showLocation = () => `🌆   ${data.userLocation} \n`;

const showWebSite = () => `🕸   ${data.siteUrl}\n`;

const showJobDescription = () => `💻   ${data.jobDescription} \n`;

const showDescription = () => `${data.userDescription} \n`;

const showLinks = () =>
  data.userLinks
    .map(link => chalk`{gray ${link.label}:} {yellow ${link.url}}\n`)
    .join('');

showCommand = () => chalk`{yellow $} {green npx ${data.packageName}}\n`;

const displayAll = () => chalk`
${showMe()}

${showName(`${data.name.first} ${data.name.last}`)}

${showWebSite()}

${showJobDescription()}

${showLocation()}

${showDescription()}

${showLinks()}

${showCommand()}
`;

console.log(
  boxen(displayAll(), { padding: 1, margin: 1, borderStyle: 'round' })
);
