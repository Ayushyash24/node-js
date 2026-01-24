const http = require('http');


http.createServer((req, resp) => {

    resp.writeHead(200, { "content-type": "text/html" });
    console.log(req.url);

    if (req.url === '/') {
        resp.write(`
            <form action="/submit" method="post">
                <input type="text" placeholder="enter name" name="name" />
                <input type="text" placeholder="enter email" name="email" />
                <button>Submit</button>
            </form>
        `);
    } 
    else if (req.url === '/submit') {
        let dataBody = [];

        req.on('data', chunk => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);
            console.log(readableData);
               resp.write(`<h1>Data Submitted</h1>
                        <p>Name: ${readableData.name}</p>
                        <p>Email: ${readableData.email}</p>`);
            resp.end();
        });
    }

}).listen(3200, () => {
    console.log('Server running on port 3200');
});
