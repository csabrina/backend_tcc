let Sequelize = require("sequelize");

const db = require("../db");
const Conteudo = require("./Conteudo");

const Topico = db.define("Topico",
       {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
         
        nome_topico: {
        type: Sequelize.STRING,
        allowNull: false
      },
         
        num_topico: {
        type: Sequelize.INTEGER,
        allowNull: false
      
        }
       
   }
);

Topico.belongsToMany(Conteudo, {through:"TopicoConteudo", as:'conteudos'});
Conteudo.belongsToMany(Topico, {through:"TopicoConteudo", as: 'topicos'})

module.exports = Topico;