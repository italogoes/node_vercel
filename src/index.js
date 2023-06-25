const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/dados', (req, res) => {
  const dados = {
    nome: 'Italo',
    idade: 23
  }
  res.send(dados)
})

// Defina a porta em que o servidor irá escutar
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});