const http = require("http")
const url = require("url")  //We add URL module but at first run *npm i url*

const mySer = http.createServer((req, res) => {
    const myUrl = url.parse(req.url);
    console.log(myUrl)
    res.end("Hello from server...");
})

mySer.listen(3000, () => console.log("server started..."))