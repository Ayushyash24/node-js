const http = require('http')

const userData = [
    {
        name: "Ayd",
        age : 21,
        email: "ayd@gmail.com"
    },
    {
        name: "Ayush",
        age : 22,
        email: "ayush@gmail.com"
    },
    {
        name: "Dwivedi",
        age : 20,
        email: "d@gmail.com"
    }
]

http.createServer((req,resp)=>{

    resp.setHeader("Content-Type","application/json")

    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6400)