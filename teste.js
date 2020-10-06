const { Console } = require('console');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testando','root','',{
    host:"localhost",
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("FOi!")
}).catch(function(erro){
    console.log("Nao foi!"+ erro)
})

const postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//postagem.sync({force: true})

/*postagem.create({
    titulo:"Titulo primeiro",
    conteudo:"lsdfnsjnfdkjsdkjfkjsdf"
})*/


const usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})
//usuario.sync({force:true})

usuario.create({
    nome:"nome1",
    sobrenome:"sobrenome1",
    idade:"12",
    email:"blabla@mail.com",
})