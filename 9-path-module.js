const path = require('path')

console.log(path.sep)

const filepath = path.join('content', 'sub-content', 'text.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const resolve = path.resolve(__dirname, 'content', 'sub-content', 'text.txt')
console.log(resolve);