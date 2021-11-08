  

/*app.get("/usuario", async (req, res) => {
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
    const usuarios = await Usuario.findbyPk(req.body.id);
    usuario.update(req.body);
    res.status(200).send("Atualizado com sucesso!");
} catch(e) {
  res.status(403).send("Já existe.");
}
});

app.delete("/usuario/:id", async (req, res) => {
  console.log("Entrou no delete");
  try {
    const usuarios = await Usuario.findbyPk(req.params.id);
    if(usuario) {
    await usuario.destroy();
    res.status(200).send("Removido com sucesso!");
} else {
  res.status(403).send("Não encontrado!"); 
}
} catch(e) {
  res.status(403).send(e);
}
});*/