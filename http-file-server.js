const http = require('http')
const fs = require('fs')
const port = Number(process.argv[2])
const patch = process.argv[3]

const server =  http.createServer( (req,res) =>{
  var texto =  fs.readFileSync(patch)
  res.writeHead(200, { 'content-type': 'text/plain' })  
  res.end(texto)    
})

server.listen(port)