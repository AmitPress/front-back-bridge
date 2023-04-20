const fs = require('fs')
const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url = '/'){
        fs.readFile('index.html',(err, data)=>{
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        })
    }

})

server.listen(3000, ()=>{
    console.log('Server is running at port 3000')
})