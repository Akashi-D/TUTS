const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.text', 'utf8')
const second = readFileSync('./content/second.text', 'utf8')
//console.log(first, second);

writeFileSync(
    './content/resul-sync.txt', 
    `this is the result: ${first}, ${second}`, {flag: 'a'}
)