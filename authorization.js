const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
const auth = req.headers.authorization;
if(!auth){ // se auth for nulo ou indefinido
  return res.status(401).send("Você não tem permissão para executar essa ação.");
};
// bearer  token
const token = auth.split(" ")[1]; // como eu só quero o token bastar pegar apenas o indice 1

jwt.verify(token, process.env.SECRET, (err, decoded) => {//passando a chave para descriptografar o token, arrow fanction para dizer se aconteceu um erro ou se a info foi decodificada
if(err){
 return res.status(401).send("Você não tem permissão para executar essa ação."); // return para que se entrar no if q indica erro, o next n continuar com a execução
};
req.email = decoded.email; // email vai estar na informação decodificada
});

next();
};