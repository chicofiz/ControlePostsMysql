const express=require("express")
const app = express()
const handlebars = require('express-handlebars')

const { Console } = require('console');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testando','root','',{
    host:"localhost",
    dialect:'mysql'
});

app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.get('view engine','handlebars')
