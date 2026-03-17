//usage http://localhost:3000/submit?name=bharath&age=20

const express = require("express");
const app = express();
const url = require("url");

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
    
});

app.get("/submit", (req,res) => {
    const queryData = url.parse(req.url, true).query;
    const name = queryData.name;
    const age = queryData.age;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Form Data Received</h2>");
    res.write("Name: " + name + "<br>");
    res.write("Age: " + age);
    res.end();
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});