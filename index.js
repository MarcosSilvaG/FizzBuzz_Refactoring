const Reader = require('./lib/utils/Reader.js')

const explorers = Reader.readJsonFile('explorers.json')
console.log(explorers)