let Sequelize = require("sequelize");

const db = require("../db");
const Usuario = require("./Usuario");
const Conteudo = db.define("Conteudo",

      {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
        nome_conteudo: {
        type: Sequelize.STRING,
        allowNull: false
      },
        
        traducao: {
        type: Sequelize.STRING
        
      },

        instrucoes: {
        type: Sequelize.STRING,
        allowNull: false
       
      },
      
        exemplo_uso: {
        type: Sequelize.STRING,
        allowNull: false
        }
   }
);
//estuda
Conteudo.belongsToMany(Usuario, {through:"ConteudoUsuario", as:'usuarios'});Usuario.belongsToMany(Conteudo, {through:"ConteudoUsurio", as: 'conteudos'})

/*Necessario fazer novamente para o relacionamento "pesquisa" entre usuario e conteudo?
Conteudo.belongsToMany(Usuario, {through:"ConteudoUsuario", as:'usuarios'});Usuario.belongsToMany(Conteudo, {through:"ConteudoUsurio", as: 'conteudos'})*/

module.exports = Conteudo;
