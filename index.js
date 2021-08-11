const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const intermediario = require('./intermediario');
const verificaNome = require('./verificaNome');
const verificaIdade = require('./verificaIdade');
const verificaTalk = require('./verificaTalk');
const verificaToken = require('./verificaToken');
const verificaRate = require('./verificaRate');
const verificaWatched = require('./verificaWatched');
const addTalker = require('./addTalker');
const editar = require('./editar');
const deletar = require('./deletar');

const app = express();
app.use(bodyParser.json());
const HTTP_OK_STATUS = 200;
const PORT = '3000';
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', intermediario.talker);

app.get('/talker/:id', intermediario.returnTalkerId);

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (!email.match(/(.+@.+\.com)(\.br)?/)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

app.post('/talker', 
verificaToken,
verificaNome,
verificaIdade,
verificaTalk,
verificaWatched,
verificaRate,
addTalker);

app.put('/talker/:id',
verificaToken,
verificaNome,
verificaIdade,
verificaTalk,
verificaRate,
verificaWatched,
editar);

app.delete('/talker/:id', 
verificaToken,
deletar);

app.listen(PORT, () => {
  console.log('Online');
});