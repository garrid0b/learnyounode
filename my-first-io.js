const fs = require('fs')

const patch = process.argv[2]
const lineas = fs.readFileSync(patch,'utf8',).split('\n').length - 1

console.log(lineas)
