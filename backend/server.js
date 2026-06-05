const http = require('http');

const server = http.createServer((req,res)=>
{
    res.writeHead(200, {
        'Content-Type':'application/json'
    });

    res.end(
        JSON.stringify({
            message:"Backend v2 Running"
        })
    );
});

server.listen(3000);

console.log("Server Started");