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

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/src/register.html")
})

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + "/src/dashboard.html")
    }
    else {
        res.redirect("/login")
    }
})


app.post("/register", (req, res) => {
    const { username, password } = req.body;
    let user_details = JSON.parse(fs.readFileSync(__dirname + "/users.json"))
    user_details.push({ username, password })
    fs.writeFileSync(__dirname + "/users.json", JSON.stringify(user_details))
    res.send("Registration Successful! <br> <a href='/login'>Login</a>")
})


app.post("/login", (req, res) => {
    const { username, password } = req.body;
    let user_details = JSON.parse(fs.readFileSync(__dirname + "/users.json"))
    let user = []
    for (let user_detail of user_details) {
        if (user_detail.username == username && user_detail.password == password) {
            user.push(user_detail)
            break
        }
    }
    if (user.length > 0) {
        req.session.user = username
        res.redirect("/dashboard")
    }
    else {
        res.send("Invalid Login! <br> <a href='/login'>Login</a> <br> <a href='/register'>Register</a>")
    }
    /* 
     (or)
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
    */
})


app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login")
    })
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})