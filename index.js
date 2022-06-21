const express = require("express");
const app = express();

// Informar para o Express que estamos usando JSON
// no body das requisições
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// Endpoint Read All - [GET] /herois
app.get("/herois", function (req, res) {
  res.send(herois);
});

// Endpoint Create - [POST] /herois
app.post("/herois", function (req, res) {
  // Acessa o nome do herói no corpo da requisição
  const item = req.body.nome;

  // Insere o nome na lista
  herois.push(item);

  res.send("Item inserido com sucesso!");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
