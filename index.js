const db = require("./db")
const Usuario = require("./model/Usuario");
/*const express = require("express");

const app = express()

app.get("/", (req, res) => {
res.json({message:"API do projeto KAHI, FINALMENTEEEEEEE!"})
});

app.listen(3000, ()=> {
   console.log("API executando!");
});
*/
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

  //conectar();
  //inserirUsuario();
  //sync();
  //listarUsuarios();

  