const fs = require('fs');

const addTalker = (req, res) => {
  const talkerJson = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  const talker = { ...req.body, id: talkerJson.length + 1 };
  fs.writeFileSync('talker.json', JSON.stringify([...talkerJson, talker]));
  res.status(201).json(talker);
};

module.exports = addTalker;