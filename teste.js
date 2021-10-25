const http = require('http')

const server = http.createServer((req,res) => {
    res.write("Hello Worrld serve java script (node)")
    res.end()
})

server.listen(5000)