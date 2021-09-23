let Sequelize = require("sequelize");

const db = require("../db");

const Subtopico = db.define("Subtopico",
       {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
         
        nome_subtopico: {
        type: Sequelize.STRING,
        
      },
         
        num_subtopico: {
        type: Sequelize.INTEGER
      
        }
       
   }
);
module.exports = Subtopico;