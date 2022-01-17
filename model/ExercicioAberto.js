
let Sequelize = require("sequelize");

const db = require("../db");
const Exercicio = db.define("Exercicio");
const ExercicioAberto = db.define("Exercicio",
    {
      
    ExercicioAbertoId: {
    type: Sequelize.INTEGER,
    primaryKey: false,
    references: {
    model: Exercicio,
    key: 'id'
  }
},

        codigo: {
        type: Sequelize.STRING,
        allowNull: false
      },
       resposta: {
        type: Sequelize.STRING,
        allowNull: false
      },

      tipo: Sequelize.BOOLEAN
    });

ExercicioAberto.belongsToMany(Exercicio, {through:"ExercicioAbertoExercicio", as:'exercicios'});
Exercicio.belongsToMany(ExercicioAberto, {through:"ExercicioAbertoExercicio", as: 'exercicioabertos'});

module.exports = ExercicioAberto;