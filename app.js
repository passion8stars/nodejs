const validator = require('validator');
const chalk = require('chalk');
const fs = require('fs');
const yargs=require('yargs');
const xyz = require('./utils');
yargs.version('1.1.0')
// sum = add(4,5);
msg = xyz();
//console.log(msg)
//console.log(name);
fs.appendFileSync('pks.txt', 'Hi, great learning react, thats good thing.')
// console.log(validator.isEmail('test@ppp.com'));
// console.log(chalk.black.bgCyan('My Text In Green'))

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})
console.log(yargs.argv)
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name="Parvind";
user.age="31";
const userJSON = JSON.stringify(user);
fs.writeFileSync('data.json',userJSON);