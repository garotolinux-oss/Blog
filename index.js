//import bodyParser from "body-parser";
//import express from "express"
const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render('index.ejs')
});

app.get("/create_page.ejs", (req,res) => {
    res.render('create_page.ejs')
});

app.get("/index.ejs", (req,res) => {
    res.render("index.ejs")
});

let blogs = []
let post = {titulo: "",
    conteudo: ""
    
}
app.post("/submit", (req, res, next) => {
   
    let post = req.body 
    post.titulo = req.body.titulo_in
    post.conteudo = req.body.corpo
    blogs.push(post)
    res.render("index.ejs", {blogs: blogs})
    
})


app.listen(port, () => {
    console.log("sevidor rodando na porta" + port);
});