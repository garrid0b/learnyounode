const fs = require('fs')

module.exports = function CrearLista (patch,ext,callback){    
    fs.readdir(patch, function (err,data) {
        if (err) {
            return callback(err)
        }
        var lista = []       
        data.map( x => x.split('.')[1]=== ext ? lista.push(x) : null)        
        callback(null, lista)
    })
}

