const http = require('http')
const page = process.argv.slice(2)

function getData(url) {
    return new Promise((resolve,reject) =>{
        http.get(url, (Response) => {
            var extraido = ''
            Response.on('data', (data)=>{ extraido+=data})  
            Response.setEncoding('utf8')
            Response.on('end', () => { resolve(extraido) })
        }).on('error', (e) => { reject(e) })
    })
}


Promise.allSettled(page.map(x => getData(x)))
.then((data) => { data.map(x=> console.log(x.value))})