const express = require ("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/index.html")
})

app.listen(3000,()=>{
    console.log("Server listening on http://localhost:3000")
})