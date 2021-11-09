let Sequelize = require("sequelize");

const db = require("../db");

const Usuario = require("./model/Usuario");

const Exercicio = require("./model/Exercicio");

const UsuarioExercicio = db.define("UsuarioExercicio",

{
    UsuarioId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
    model: Usuario,
    key: 'id'
  }
},

    ExercicioId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
    model: Exercicio,
    key: 'id'
    }
  },


acertou: Sequelize.BOOLEAN

acetou: Sequelize.BOOLEAN

  }
);

Usuario.belongsToMany(Exercicio, {through:UsuarioExercicio, as:'exercicios'});
Exercicio.belongsToMany(Usuario, {through:UsuarioExercicio, as: 'usuarios'})

module.exports = UsuarioExercicio;