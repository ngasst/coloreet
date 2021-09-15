const { colorit } = require('./lib');
const tw = require('tailwindcss/colors');
const chalk = require('chalk');

const value = 'Testing.....';

// console.log(colorit['#55d'])('Some test');

// Object.keys(tw).forEach((key) => {
//   const shades = Object.keys(tw[key]);

//   for (let shade of shades) {
//     const handle = `${key}_${shade}`;
//     colorit[handle](value);
//   }
// });

for (const item of ['orange_500', 'sky_600', 'palegreen']) {
  const val = colorit[item](`Color me ${item}`);
  console.log(val);
}
