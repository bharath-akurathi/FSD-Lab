const express = require("express");
const session = require("express-session")
const fs = require("fs")

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "session123",
    resave: false,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/login.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/src/login.html")
})

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + "/src/dashboard.html")
    }
    else {
        res.redirect("/login")
    }
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    let user_details = JSON.parse(fs.readFileSync(__dirname + "/users.json"))
    let user = user_details.find(
        u => u.username == username && u.password == password
    )
    if (user) {
        req.session.user = username
        res.redirect("/dashboard")
    }
    else {
        res.send("Invalid Login! <br><a href='/login'>Login</a>")
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login")
    })
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})