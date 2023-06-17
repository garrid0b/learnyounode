const fs = require('fs')

const patch = process.argv[2] 

fs.readFile(patch,'utf8', function callback (err,data) {
if(err){
    return console.log(err)    
}
var linea  = data.split('\n').length - 1
console.log(linea)
})
