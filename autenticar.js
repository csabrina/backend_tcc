/*app.post("/autenticar", async (req, res) => {
  const {email, username, senha} = req.body;
  const usuarios = await Usuario.findOne({where:{email}}); //!usuarios verifica se é undefined
  if(!usuarios || !senha) {
     res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(senha, usuarios.senha)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn:3600}
    );
   res.send({email, token});
  } else {
    res.status(400).send("Credenciais inválidas");
  }
});*/