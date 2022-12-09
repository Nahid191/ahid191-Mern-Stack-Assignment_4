const express = require("express");


const app = express();

const port = 12448;


app.get("/",function (req, res) {


    res.send("MY Name is Nahid");
})

app.listen(port,function () {
    console.log("Server Run Successfully");
})