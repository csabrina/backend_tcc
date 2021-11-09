const db = require("./db");
const Usuario = require("./model/Usuario");
const Exercicio = require("./model/Exercicio");
const Conteudo = require("./model/Conteudo");
const Topico = require("./model/Topico");

const express = require("express");

const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/*app.get("/", (req, res) => {
res.json({message:"API do projeto KAHI, FINALMENTEEEEEEE!"})
});*/


app.get("/usuario", async (req, res) => {
let usuarios = await Usuario.findAll();
res.json(usuarios);
res.status(200);
});

app.get("/usuario/:id", async (req, res) => {
const usuarios = await Usuario.findByPk(req.params.id);
res.json(usuarios);
res.status(200);
});

app.post("/usuario", async (req, res) => {
  console.log("Entrou no post");
  try {
    const usuarios = await Usuario.create(req.body);
    res.status(200).send("Cadastrado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.put("/usuario", async (req, res) => {
  console.log("Entrou no put");
  try {
    const usuarios = await Usuario.findByPk(req.body.id);
    usuarios.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/usuario/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if(usuario) {
    await usuario.destroy();
    res.status(200).send("Removido com sucesso!");
}else {
  res.status(400).send("Não encontrado!")
}
} catch(e) {
  res.status(400).send(e);
}
});

app.get("/conteudo", async (req, res) => {
let conteudos = await Conteudo.findAll();
res.json(conteudos);
res.status(200);
});

app.get("/conteudo/:id", async (req, res) => {
const conteudos = await Conteudo.findByPk(req.params.id);
res.json(conteudos);
res.status(200);
});

app.post("/conteudo", async (req, res) => {
  console.log("Entrou no post");
  try {
    const conteudos = await Conteudo.create(req.body);
    res.status(200).send("Cadastrado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.put("/conteudo", async (req, res) => {
  console.log("Entrou no put");
  try {
    const conteudos = await Conteudo.findByPk(req.body.id);
    conteudos.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/conteudo/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const conteudos = await Conteudo.findByPk(req.params.id);
    if(conteudos) {
    await conteudos.destroy();
    res.status(200).send("Removido com sucesso!");
}else {
  res.status(400).send("Não encontrado!")
}
} catch(e) {
  res.status(400).send(e);
}
});

app.get("/exercicio", async (req, res) => {
let exercicios = await Exercicio.findAll();
res.json(exercicios);
res.status(200);
});

app.get("/exercicio/:id", async (req, res) => {
const exercicios = await Exercicio.findByPk(req.params.id);
res.json(exercicios);
res.status(200);
});

app.post("/exercicio", async (req, res) => {
  console.log("Entrou no post");
  try {
    const exercicios = await Exercicio.create(req.body);
    res.status(200).send("Cadastrado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.put("/exercicio", async (req, res) => {
  console.log("Entrou no put");
  try {
    const exercicios = await Exercicio.findByPk(req.body.id);
    exercicios.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/exercicio/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const exercicios= await Exercicio.findByPk(req.params.id);
    if(exercicios) {
    await exercicios.destroy();
    res.status(200).send("Removido com sucesso!");
}else {
  res.status(400).send("Não encontrado!")
}
} catch(e) {
  res.status(400).send(e);
}
});
app.get("/topico", async (req, res) => {
let topicos = await Topico.findAll();
res.json(topicos);
res.status(200);
});

app.get("/topico/:id", async (req, res) => {
const topicos = await Topico.findByPk(req.params.id);
res.json(topicos);
res.status(200);
});

app.post("/topico", async (req, res) => {
  console.log("Entrou no post");
  try {
    const topicos = await Topico.create(req.body);
    res.status(200).send("Cadastrado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.put("/topico", async (req, res) => {
  console.log("Entrou no put");
  try {
    const topicos = await Topico.findByPk(req.body.id);
    topicos.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/topico/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const topicos= await Topico.findByPk(req.params.id);
    if(topicos) {
    await topicos.destroy();
    res.status(200).send("Removido com sucesso!");
}else {
  res.status(400).send("Não encontrado!")
}
} catch(e) {
  res.status(400).send(e);
}
});


app.get("/usuarioexercicio", async (req, res) => {
let usuarioexercicios = await UsuarioExercicio.findAll();
res.json(usuarioexercicios);
res.status(200);
});

app.get("/usuarioexercicio/:id", async (req, res) => {
const usuarioexercicios = await UsuarioExercicio.findByPk(req.params.id);
res.json(usuarioexercicios);
res.status(200);
});

app.post("/usuarioexercicio", async (req, res) => {
  console.log("Entrou no post");
  try {
    const usuarioexercicios = await UsuarioExercicio.create(req.body);
    res.status(200).send("Cadastrado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.put("/usuarioexercicio", async (req, res) => {
  console.log("Entrou no put");
  try {
    const usuarioexercicios = await UsuarioExercicio.findByPk(req.body.id);
    usuarioexercicios.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/usuarioexercicio/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const usuarioexercicios= await UsuarioExercicio.findByPk(req.params.id);
    if(usuarioexercicios) {
    await usuarioexercicios.destroy();
    res.status(200).send("Removido com sucesso!");
}else {
  res.status(400).send("Não encontrado!")
}
} catch(e) {
  res.status(400).send(e);
}
});


/*app.get("/exercicio", async (req, res) => {
let exercicios = await Exercicio.findAll();
res.json(exercicios);
res.status(200);
});

app.get("/conteudo", async (req, res) => {
let conteudos = await Exercicio.findAll();
res.json(conteudos);
res.status(200);
});

app.get("/topico", async (req, res) => {
let topicos = await Topico.findAll();
res.json(topicos);
res.status(200);
});*/

   app.listen(3000, ()=> {
   console.log("API executando!");

});

//{force; true} {alter:true} livro.drop(); apagar determinada tabela await sequelize.drop();
/*async function sincronizar() { 
  await db.sync({force: true})
}
sincronizar();


  async function conectar() {
  try {
    await db.authenticate();
    console.log("Sucesso!");
  } catch (e) {
    console.log(e, "Falhou!");
  }
  };*/

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
      nome_conteudo: "declarando variaveis",
      traducao: "aqui colocamos a traducao",
      instrucoes: "blablablabla",
      exemplo_uso: " int a= 0;"
      };
        
    await Conteudo.create(conteudo1);
  } catch (e) {
    console.log(e, "Falhou!")
  }
};

    async function listarConteudo() {
    try {
      let conteudos = await Conteudo.findAll();
      console.log(conteudos);
    } catch (e) {
      console.log(e);
    }
};

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
};
    async function listarExercicio() {
    try {
      let exercicios = await Exercicio.findAll();
      console.log(exercicios);
    } catch (e) {
      console.log(e);
    }

  };

  async function adicionarTopico() {

  try {
    let topico1 = {
      nome_topico: "Conceitos básicos",
      num_topico: "1"
    };

    await Topico.create(topico1);
  } catch (e) {
    console.log(e, "Falhou!")
  }

};

  async function listarTopico() {
    try {
      let topicos = await Topico.findAll();
      console.log(topicos);
    } catch (e) {
      console.log(e);


    }
  };*/

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


/*const{Op} = require("sequelize");

async function buscarTopico() {
  let topico = await Topico.findByPk(1);
console.log(topico);
}

buscarTopico();

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
});
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




