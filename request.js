const http = require('http');

http.createServer((req,resp)=>{
    console.log(req.method);

    if(req.url =='/'){
        resp.write("This is the Home Page");
    }
    else if(req.url == '/login'){
        resp.write("This is the Login Page");
    }
    else{
        resp.write("404 Page Not Found");
    }
    resp.end();
}).listen(5500);