let Sequelize = require("sequelize");

const db = require("../db");

const Topico = db.define("Topico",
       {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
         
        nome_topico: {
        type: Sequelize.STRING,
        
      },
         
        num_topico: {
        type: Sequelize.INTEGER
      
        }
       
   }
);
module.exports = Topico;