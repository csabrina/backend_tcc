/*
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
});*/