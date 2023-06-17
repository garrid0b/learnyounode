const http = require('http')
const page = process.argv[2]

http.get(page, (Response) => {

    Response.setEncoding('utf8')

    Response.on('data', function(data){
        console.log(data)        
    })  
   
}).on('error', (e) => {
    console.error(e.message)
})