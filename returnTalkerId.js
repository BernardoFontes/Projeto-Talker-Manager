const talkerId = require('./talkerId.js');

async function returnTalkerId(req, res) {
    const idTalker = req.params.id;
    const awaitReq = await talkerId();
    const find = awaitReq.find(({ id }) => id === Number(idTalker));
    if (find) {
      return res.status(200).json(find);
    }
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
module.exports = returnTalkerId;  