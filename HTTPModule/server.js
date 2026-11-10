const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("New request recived !");
    res.end("Hello from server call...");
})

myServer.listen(8000, () => console.log("Server start..."));