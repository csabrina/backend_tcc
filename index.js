const db = require("./db");
const Usuario = require("./model/Usuario");
const Exercicio = require("./model/Exercicio");
const Conteudo = require("./model/Conteudo");
const Topico = require("./model/Topico");

const express = require("express");

const app = express()

app.get("/", (req, res) => {
res.json({message:"API do projeto KAHI, FINALMENTEEEEEEE!"})
});

/*app.listen(3000, ()=> {
   console.log("API executando!");

});*/

//{force; true} {alter:true} livro.drop(); apagar determinada tabela await sequelize.drop();
/*async function sincronizar() { 
  await db.sync({force: true})
}
sincronizar();
*/

/*async function conectar() {
  try {
    await db.authenticate();
    console.log("Sucesso!");
  } catch (e) {
    console.log(e, "Falhou!");
  }
}*/

 /* async function inserirUsuario() {
  try {
    let usuario1 = {
      email: "teste@gmail.com",
      username:"teste_t",
      senha: "testando"
    };

    await Usuario.create(usuario1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
 }*/

  /*async function listarUsuarios() {
    try {
      let usuarios = await Usuario.findAll();
      console.log(usuarios);
    } catch (e) {
      console.log(e);
    }
  }*/

/*async function adicionarConteudo() {
  try {
    let conteudo1 = {
      nome_conteudo: "declarando variaveis",
      traducao: "aqui colocamos a traducao",
      instrucoes: "blablablabla",
      exemplo_uso: " int a= 0;"
      };
        
    await Conteudo.create(conteudo1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}*/
/*async function listarConteudo() {
    try {
      let conteudos = await Conteudo.findAll();
      console.log(conteudos);
    } catch (e) {
      console.log(e);
    }
}*/

/*async function adicionarExercicio() {
  try {
    let exercicio1 = {
      numeroDoExercicio: "5",
      explicacaoDoExercicio: "faz isso aq oh",
      ajudaDoExercicio: "socorram me subi num onibus em marrocos", instrucoesDoExercicio: "isso aq dps isso aq ai faz isso aq e termina com isso aq"
    };

    await Exercicio.create(exercicio1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}*/
  /*async function listarExercicio() {
    try {
      let exercicios = await Exercicio.findAll();
      console.log(exercicios);
    } catch (e) {
      console.log(e);
    }
  }*/

/*async function adicionarTopico() {
  try {
    let topico1 = {
      nome_topico: "Conceitos básicos",
      num_topico: "1"
    };

    await Topico.create(topico1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}*/
/*
  async function listarTopico() {
    try {
      let topicos = await Topico.findAll();
      console.log(topicos);
    } catch (e) {
      console.log(e);
    }
  }*/


//conectar();
//inserirUsuario();
//sync();
//listarUsuarios();
//adicionarConteudo();
//listarConteudo();
//adicionarExercicio();
//listarExercicio();
//adicionarTopico();
//listarTopico();


//consultas funcionando!!
/*
const{Op} = require("sequelize");

async function buscarTopico() {
  let topico = await Topico.findByPk(1);
console.log(topico);
}
buscarTopico();
*/
/*
const{Op} = require("sequelize");

async function buscarUsuario() {
  let usuario = await Usuario.findAll({
  where: {
    id: {
    [Op.lt]: [2]
  }
}
});
console.log(usuario);
}
buscarUsuario();


const{Op} = require("sequelize");

async function retornarUsuarios() {
  let usuarios1 = await Usuario.findAll({
  where: {
    id: {
    [Op.or]: [1, 3]
  }
}
});
console.log(usuarios1);
}
retornarUsuarios();

 
const{Op} = require("sequelize");

async function topicoEmQue() {
  let numerodotopico = await Topico.findAll({
  where: {
   num_topico: '1'
  }
})
console.log(numerodotopico);
}
topicoEmQue();

const{Op} = require("sequelize");

async function buscarUsername() {
  let username1 = await Usuario.findAll({
  where: {
    username: 'fer_bruna'
  }
});
console.log(username1);
}
buscarUsername();


const{Op} = require("sequelize");

async function usuarioEsp() {
  let usuario = await Usuario.findByPk(2);
console.log(usuario);
}
usuarioEsp();


const{Op} = require("sequelize");

async function topicofiltrar() {
  let topico = await Topico.findAll({
  where: {
    nome_topico: 'Conceitos básicos'
  }
});
console.log(topico);
}
topicofiltrar();


const{Op} = require("sequelize");

async function usuarioFiltrar() {
  let usuariof = await Usuario.findAll({
  where: {
      id: {
        [Op.between]: [1, 5]
      }
  }
  });
  console.log(usuariof);
}
usuarioFiltrar();


const{Op} = require("sequelize");

async function buscarConteudo() {
  let conteudo = await Conteudo.findAll({
    where: {
      id: {
        [Op.gte]: 1,
      }
    }
  });
  console.log(conteudo);  
}

buscarConteudo();



const{Op} = require("sequelize");

async function filtrarConteudo() {
  let filconteudos = await Conteudo.findAll({
    where: {
      id: {
        [Op.gte]: 1,
      }
    }
  });
  console.log(filconteudos);  
}

filtrarConteudo();*/



