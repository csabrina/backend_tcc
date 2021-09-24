const db = require("./db")
const Usuario = require("./model/Usuario");
const Exercicio = require("./model/Exercicio");
const Conteudo = require("./model/Conteudo");
const Subtopico = require("./model/Subtopico");
const Topico = require("./model/Topico");

/*const express = require("express");

const app = express()

app.get("/", (req, res) => {
res.json({message:"API do projeto KAHI, FINALMENTEEEEEEE!"})
});

app.listen(3000, ()=> {
   console.log("API executando!");
<<<<<<< HEAD
});*/

async function sync() { 
  await db.sync(); //{force; true}
}

async function conectar() {
  try {
    await db.authenticate();
    console.log("Sucesso!");
  } catch (e) {
    console.log(e, "Falhou!");
  }
}

async function inserirUsuario() {
  try {
    let usuario1 = {
      email: "bruna.sabrina@ifpb.com",
      username: "hihi_muitolindas", senha: "senha123"
    };

    await Usuario.create(usuario1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}
  async function listarUsuarios() {
    try {
      let usuarios = await Usuario.findAll();
      console.log(usuarios);
    } catch (e) {
      console.log(e);
    }
  }

async function adicionarConteudo() {
  try {
    let conteudo1 = {
      traducao: "if = se",
      curiosidade: "bla bla bla bla",
      instrucoes: "A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.",
      exemplo_uso: " if(media>= 70) console.log( Aprovado! )"
    };
        
    await Conteudo.create(conteudo1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}
async function listarConteudo() {
    try {
      let conteudos = await Conteudo.findAll();
      console.log(conteudos);
    } catch (e) {
      console.log(e);
    }
}

async function adicionarExercicio() {
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
}
  async function listarExercicio() {
    try {
      let exercicios = await Exercicio.findAll();
      console.log(exercicios);
    } catch (e) {
      console.log(e);
    }
  }
  async function adicionarSubtopico() {
  try {
    let subtopico1 = {
      nome_subtopico: "If",
      num_subtopico: "2"
    };

    await Subtopico.create(subtopico1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}
  async function listarSubtopico() {
    try {
      let subtopicos = await Subtopico.findAll();
      console.log(subtopicos);
    } catch (e) {
      console.log(e);
    }
  }
async function adicionarTopico() {
  try {
    let topico1 = {
      nome_topico: "Introducao Basica",
      num_topico: "1"
    };

    await Topico.create(topico1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
}
  async function listarTopico() {
    try {
      let topicos = await Topico.findAll();
      console.log(topicos);
    } catch (e) {
      console.log(e);
    }
  }

  
//conectar();
//inserirUsuario();
//sync();
//listarUsuarios();
//adicionarConteudo();
//listarConteudo();
//adicionarExercicio();
//listarExercicio();
//adicionarSubtopico();
//listarSubtopico();
//adicionarTopico();
//listarTopico();



