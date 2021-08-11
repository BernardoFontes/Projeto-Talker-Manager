const fs = require('fs');

function returnTalker(req, res) {
  fs.promises.readFile('./talker.json', 'utf-8')
  .then((response) => JSON.parse(response))
  .then((data) => res.status(200).json(data))
  .catch(() => {
    res.status(200).send([]);
});
}

module.exports = returnTalker;