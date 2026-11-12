const express = require("express")

const app = express();
const PORT = 8000;


app.use((req, res, next) => {
    console.log("Hello this is from middleware 1")
    next();
})


app.use((req, res, next) => {
    console.log("Hello this is from middleware 2")
    //return res.end("Hey !");
    next();
})
app.get("/", (req, res) => {
    //const html = `<h1>Hello this is Home page...</h1>`
    //res.send(html);
    const data = { status: "OK fine" }
    return res.json(data)
})



app.listen(PORT, () => console.log(`Server now start at PORT ${PORT} `))