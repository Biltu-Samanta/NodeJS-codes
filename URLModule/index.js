const http = require("http");

function mySer(req, res) {
    console.log("New request recived !");
    res.end("Hello from server ...");
}

const myServer = http.createServer(mySer)

myServer.listen(8000, () => console.log("Server start..."));