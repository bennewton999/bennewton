#! /usr/bin/env node

const cfonts = require('cfonts');
const imageToAscii = require('image-to-ascii');
const ora = require('ora');
const data = require('./myData.js');

const spinner = ora({
  text: `Getting ${data.name.first}'s picture`,
  spinner: 'clock'
});

spinner.start();

imageToAscii(
  data.siteLogo,
  {
    // pixels: '█',
    // size: { height: '50%' },
    size_options: { screen_size: { height: 50, width: 50 } },
    fit_screen: false
  },
  (err, converted) => {
    spinner.succeed('Done');
    // console.log(err || converted);
    showImage(converted);
    showName(`${data.name.first} ${data.name.last}`);
    showJobDescription();
    showLocation();
    showDescription();
    showWebSite();
    showLinks();
    showCommand();
    // showData();
  }
);

const showName = name => {
  cfonts.say(name, {
    //   font: 'huge',
    colors: ['white', 'yellow']
  });
};

const showImage = imageContents => {
  console.log(imageContents);
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
  console.log(`$ ${data.packageName}`);
};

const showData = () => {
  console.log(data);
};
