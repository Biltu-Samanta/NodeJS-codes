const express = require('express');
const fs = require('fs')
const mongoose = require('mongoose')

const app = express();
const PORT = 8000;

//Connect with DataBase
mongoose.connect("mongodb://127.0.0.1:27017/my_data")
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log("MongoDB error", err))

//Schema create
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, //Because TRUE means First name must require
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Must be a unique email address
    },
    jobTitle: {
        type: String,
    },
})

// Create Models
const User = mongoose.model("user", userSchema)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.post("/users", async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required..." });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
    });

    return res.status(201).json({ msg: "Success", id: result._id });
});

app.get("/users", async (req, res) => {
    const allDBusers = await User.find({})
    const html = `<ul>
        ${allDBusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>`
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});