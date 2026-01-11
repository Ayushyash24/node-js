const http = require('http')

const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write(
        `<html>
        <head></head>
        <body>
        <h1> Hello AYD.</h1>
        </body>
        </html>
        `
    )
    resp.end()
})


server.listen(4500)