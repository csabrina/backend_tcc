let Sequelize = require("sequelize");


const db = require("../db");
const Exercicio = db.define("Exercicio");
const ExercicioObjetivo = db.define("ExercicioObjetivo",
    {
  
    ExercicioId: {
    type: Sequelize.INTEGER,
    primaryKey: false,
    references: {
    model: Exercicio,
    key: 'id'
  }
},
        verdadeira: {
        type: Sequelize.STRING,
        allowNull: false
      },
       falsa_um: {
        type: Sequelize.STRING,
        allowNull: false
      },
       falsa_dois: {
        type: Sequelize.STRING,
        allowNull: false
      },
       verdadeira: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipoobj: Sequelize.BOOLEAN
    });
//fechado??
ExercicioFechado.belongsToMany(Exercicio, {through:"ExercicioFechadoExercicio", as:'exercicios'});
Exercicio.belongsToMany(ExercicioFechado, {through:"ExercicioFechadoExercicio", as: 'exerciciofechado'})

module.exports = ExercicioFechado;