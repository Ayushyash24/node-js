const http = require('http');

const arg = process.argv;
const port = arg[2];

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/plain");
    resp.write(`Server is running on port: ${port}`);
    resp.end();
}).listen(port);