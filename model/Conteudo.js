let Sequelize = require("sequelize");

const db = require("../db");

const Conteudo = db.define("Conteudo",
      {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
         
        traducao: {
        type: Sequelize.STRING,
        
      },
         
        curiosidade: {
        type: Sequelize.STRING
      
      },

        instrucoes: {
        type: Sequelize.STRING,
       
      },
        exemplo_uso: {
        type: Sequelize.STRING
        }
   }
);
module.exports = Conteudo;