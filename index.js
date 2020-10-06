const express=require("express")
const app = express()
const handlebars = require('express-handlebars')
const BodyParser= require('body-parser')
const Post = require('./models/Post')

//config
//template engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')
//body parser
app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())

//rota
app.get('/', function(req, res){
    Post.findAll({order:[['id','DESC']]}).then(function(posts){
    res.render('home', {posts: posts})
    })
})

app.get('/cad',function(req,res){
    res.render('formulario')
})
app.post('/add',function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("houve um erro"+erro)
    })
})

app.get('/deletar/:id',function(req,res){
    Post.destroy({where:{'id':req.params.id}}).then(function(){
        res.redirect('/');    
    }).catch(function(erro){
        res.send('Erro ao deletar'+erro)
    })
})

app.get('/pmod/:id',function(req,res){
    Post.findAll({where:{'id':req.params.id}}).then(function(posts){
        res.render('modificar', {posts: posts})
    })
})

app.post('/mod/:id',function(req,res){
    Post.update({titulo: req.body.titulomod,conteudo:req.body.conteudomod},
        {where:{id:req.params.id}})
        res.redirect('/');    
})

app.listen(8081,function(){
    console.log("Server ON")
})

/*app.get("/",function(req,res){
    res.sendfile(__dirname +"/html/index.html")
})
app.get("/p1",function(req,res){
    res.send("pagina 1")
})
app.get("/p2",function(req,res){
    res.send("pagina2")
})
app.get("/ola/:nome",function(req,res){
    res.send(`ola ${req.params.nome}`)
})*/