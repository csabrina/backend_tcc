/*app.get("/topico", async (req, res) => {
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


*/