//conexao
const { Console } = require('console');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp','root','',{
    host:"localhost",
    dialect:'mysql'
});

module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize
}