//Common JS every file is module by default
const names = require('./4-names')
const utilities = require('./7-utilities')
const data = require('./5-alternative-flavor')
console.log(data)
require('./6-mind-grenade')

utilities('david')
utilities(names.john)
utilities(names.peter)