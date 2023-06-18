const http = require('http')
const url = require('url')
const port = process.argv[2]

const server =  http.createServer( (req,res) =>{
    var page = url.parse(req.url,true)      
    var hour = new Date(page.query.iso)
    const ParseTime =   {
        "hour": hour.getHours(),
        "minute": hour.getMinutes(),
        "second": hour.getSeconds()
      }
    const unix = { 
        "unixtime": hour.getTime()
    }    
    res.writeHead(200, { 'content-type': 'application/json' })  
      if (page.pathname==='/api/parsetime'){
        res.end(JSON.stringify(ParseTime))
      }
      if (page.pathname==='/api/unixtime'){
        res.end(JSON.stringify(unix))
      }  
})
server.listen(port)