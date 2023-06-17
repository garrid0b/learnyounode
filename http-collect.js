const http = require('http')
const page = process.argv[2]

http.get(page, (Response) => {
 var extraido = ''
    Response.setEncoding('utf8')
    Response.on('data', function(data){
        extraido+=data  
    })  
   Response.on('end', function(){
    console.log(extraido.length)
    console.log(extraido)
   })
}).on('error', (e) => {
    console.error(e.message)
})