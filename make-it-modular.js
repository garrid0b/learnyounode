const mod = require('./mymodule')

const patch = process.argv[2]
const ext = process.argv[3]

mod(patch,ext,function (err,lista) {
    if (err){
        console.log(err)
    }
    lista.forEach(element => {
        console.log(element)
    });
})