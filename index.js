//import bodyParser from "body-parser";
//import express from "express"
const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const port = 3000;
const path = require("path")
//configuaraç~eos do css e passa informações
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
//variaveis usadas
let blogs = []
let post = {titulo: "",
    conteudo: ""
    
}
//get pags
app.get("/", (req, res) => {
    res.render('index.ejs')
});

app.get("/create_page.ejs", (req,res) => {
    res.render('create_page.ejs')
});

app.get("/index.ejs", (req,res) => {
    res.render("index.ejs", {blogs: blogs})
});

app.get("/edit.ejs", (req, res) => {
    res.render("edit.ejs", {blogs: blogs})
})


//postagem (envio)
app.post("/submit", (req, res, next) => {
   
    let post = req.body 
    post.titulo = req.body.titulo_in
    post.conteudo = req.body.corpo
    blogs.push(post)
    res.render("index.ejs", {blogs: blogs})
    
})

//deleta post

app.delete("/delete-post/:titulo", (req, res) => {
    const tituloparaRemover = req.params.titulo;
    //filtra a lista removendo o item correspondente
    blogs = blogs.filter(post => post.titulo_in !== tituloparaRemover)

    res.json({succes: true})
})

app.put("/put-post/:titulo", (req, res) => {
    const tituloparaatualizar = req.params.titulo;
    
})

app.set("view engine", "ejs");
//porta
app.listen(port, () => {
    console.log("sevidor rodando na porta" + port);
});