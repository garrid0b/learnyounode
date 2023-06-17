
const argumentos = process.argv
var suma = 0

for(var i = 2; i < argumentos.length ; i++){
        suma= suma  + Number(argumentos[i])
}

console.log(suma)