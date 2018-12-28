#! /usr/bin/env node

const cfonts = require('cfonts');
const imageToAscii = require('image-to-ascii');

imageToAscii(
  'https://benenewton.com/logos/ben.png',
  {
    // pixels: '█',
    // size: { height: '50%' },
    size_options: { screen_size: { height: 50, width: 50 } },
    fit_screen: false
  },
  (err, converted) => {
    console.log(err || converted);
  }
);

cfonts.say('Ben Newton', {
  //   font: 'huge',
  colors: ['white', 'blue', 'red']
});
