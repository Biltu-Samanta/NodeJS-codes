const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.setHeader("X-myName", "Biltu Samanta")
    return res.json({ status: "Ok fine..." })
})

app.listen(8000, () => console.log("Server is running..."))