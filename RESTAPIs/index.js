const express = require("express")
const users_data = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000;

//ROUTE

app.get("/users", (req, res) => {
    const html = `
    <ul> ${users_data.map((user) => `<li>${user.first_name}</li>`).join("")} </ul>
    `
    res.send(html);
})


//ROUTE GROUPPING 

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users_data.find((user) => user.id === id);
        return res.json(user)
    })
    .post((req, res) => {
        return res.json({ status: "pending" })
    })

app.get("/api/users", (req, res) => {
    return res.json(users_data)
})

app.listen(PORT, () => {
    console.log(`server start at POST ${PORT}`)
})
// ROUTES GROUPPING 

