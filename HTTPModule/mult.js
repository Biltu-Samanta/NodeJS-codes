const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    })
    const log = `${time}::: ${req.url}: New request Recived...\n`
    fs.appendFile("newLog.txt", log, (err, data) => {

        switch (req.url) {
            case '/': res.end("Home page")
                break
            case '/about': res.end("about page")
                break
            case '/contact': res.end("contact page")
                break
            default:
                res.end("404 page not found....")
        }
    })

})

myServer.listen(8000, () => console.log("Server started..."))