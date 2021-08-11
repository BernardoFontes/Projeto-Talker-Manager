const fs = require('fs');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const buscarTalker = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));

  buscarTalker[id - 1] = { id: Number(id), name, age, talk };

  fs.writeFileSync('talker.json', JSON.stringify(buscarTalker));

  res.status(200).json(buscarTalker[id - 1]);
};