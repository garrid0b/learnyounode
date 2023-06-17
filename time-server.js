const net = require('net');
const port = process.argv[2]

const server = net.createServer((c) => {
var date = new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    
c.write(formattedDate+'\r\n')

c.end()
});

server.on('error', (err) => {
  console.log(err)
});


server.listen(port)