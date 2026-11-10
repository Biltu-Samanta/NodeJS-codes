const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    const log = `${time} : New Req. recived..\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("Hello from server side...");
    })
})
myServer.listen(8000, () => console.log("Sever start..."))