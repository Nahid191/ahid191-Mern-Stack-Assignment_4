const express = require("express");

const app = express();

const port = 8060;

app.get("/", function (req,res) {

    res.download("./upload/mern_a.png");
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})