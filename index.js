#! /usr/bin/env node

const cfonts = require('cfonts');
const data = require('./myData.js');
const me = require('./me');

const showName = name => {
  cfonts.say(name, {
    colors: ['white', 'yellow']
  });
};

const showMe = () => {
  console.log(me);
};

const showLocation = () => {
  console.log(`🌆  ${data.userLocation}\n`);
};

const showWebSite = () => {
  console.log(`🕸  ${data.siteUrl}\n`);
};

const showJobDescription = () => {
  console.log(`👨‍💻  ${data.jobDescription}\n`);
};

const showDescription = () => {
  console.log(`${data.userDescription}\n`);
};

showLinks = () => {
  data.userLinks.map(link => console.log(`${link.label}: ${link.url}`));
  console.log('\n');
};

showCommand = () => {
  console.log(`$ npx ${data.packageName}`);
};

const showData = () => {
  console.log(data);
};

showMe();
showName(`${data.name.first} ${data.name.last}`);
showJobDescription();
showLocation();
showDescription();
showWebSite();
showLinks();
showCommand();
// showData();
