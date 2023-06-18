const http = require('http')
const fs = require('fs')
const port = Number(process.argv[2])
const patch = process.argv[3]

const server =  http.createServer( (req,res) =>{
  fs.readFile(patch,'utf8',(err,data)=>{
    if(err){
      return console.error(err);
    }
    res.writeHead(200, { 'content-type': 'text/plain' })  
    res.end(data)   
  })

})

server.listen(port)