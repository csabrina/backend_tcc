/*
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
});*/