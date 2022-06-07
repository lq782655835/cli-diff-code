#!/usr/bin/env node
const program = require('commander');

program
	.option('-d, --debug', 'output extra debugging')
	.option('-s, --small', 'small pizza size')
	.option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);
const options = program.opts();
console.log(options);
// cli -d -s -p vegetarian

// #!/usr/bin/env node
// var argv = require('yargs').argv;
// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!');
// } else {
//     console.log('Retreat from the xupptumblers!');
// }
// cli --ships=4 --distance=22
