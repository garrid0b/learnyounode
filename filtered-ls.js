const fs = require('fs')
const patch = process.argv[2] 
const ext = process.argv[3]

fs.readdir(patch,function (err,data) {
    if (err) {
        return console.log(err)
    }

   data.map( x => x.split('.')[1]=== ext ? console.log(x) : null)

})