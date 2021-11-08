let Sequelize = require("sequelize");

const db = require("../db");
const Conteudo = require("./Conteudo");
const Exercicio = db.define("Exercicio",
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
        numeroDoExercicio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

        explicacaoDoExercicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
        ajudaDoExercicio: {
        type: Sequelize.STRING,
        allowNull: false  
   },
        instrucoesDoExercicio: {
        type: Sequelize.STRING,
        allowNull: false
        }
    }
);
Exercicio.belongsToMany(Conteudo, {through:"ConteudoExercicio", as:'conteudos'});Conteudo.belongsToMany(Exercicio, {through:"ConteudoExercicio", as: 'exercicios'})

module.exports = Exercicio;

