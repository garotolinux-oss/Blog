const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get("/create_page", (req,res) => {
    res.sendFile(path.join(__dirname,"create_page.html" ))
});

app.listen(port, () => {
    console.log("sevidor rodando na porta" + port);
});