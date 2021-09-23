let Sequelize = require("sequelize");

const db = require("../db");

const Exercicio = db.define("Exercicio",
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
        numeroDoExercicio: {
        type: Sequelize.INTEGER,
       // allowNull: false
    },

        explicacaoDoExercicio: {
        type: Sequelize.STRING,
        //allowNull: false
    },
        ajudaDoExercicio: {
        type: Sequelize.STRING,
        //allowNull: false  
   },
        instrucoesDoExercicio: {
        type: Sequelize.STRING,
        //allowNull: false
        }
    }
);
module.exports = Exercicio;