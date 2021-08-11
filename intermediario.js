const talker = require('./talker');
const returnTalkerId = require('./returnTalkerId');
const login = require('./login.js');

module.exports = {
    talker,
    returnTalkerId,
    login,
};

// estava tentando fazer sem intermediario, apenas importando os dois arquivos diretamente no index.js. Porém, dava confli-
// to, pois quando fazia a requisição do Talker, caía no erro 404 do ReturnTalkerId, ou seja, uma rota sem id é tido como
// pessoa palestrante não encontrada (pois nao tem ninguém no talker.json com id vazio ou undefined). Passar os arquivos
// com um intermediário solucionou isso. Encontrei a solução no repositorio do tryber Rafael Santana, turma 8.