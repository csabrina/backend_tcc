const express = require("express");

const app = express()

app.get("/", (req, res) => {
res.json({message:"API do projeto KAHI, FINALMENTEEEEEEE!"})
});

app.listen(3000, ()=> {
   console.log("API executando!");
});



/*const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.json({message:"API KAHI"})
});

app.listen(3000, ()=> {
  console.log("API executando!");
});*/